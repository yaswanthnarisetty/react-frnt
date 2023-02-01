import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home (){
    const [products,setProducts] = useState([])
    useEffect(() =>{
        getProducts();
    },[]);
    // products && product.map() => {};

    const getProducts = async () =>{
        let result = await fetch('http://localhost:6001/products');
        result = await result.json();
        setProducts(result)
    }

    const deleteProduct = async (id) =>{
        let result = await fetch(`http://localhost:6001/product/${id}`,{
            method:'Delete'
        });
        result = await result.json();
        if(result){
            getProducts();
        }
    }

    const handleChange = async (event) =>{
        let key = event.target.value;
        if(key){
            let result = await fetch (`http://localhost:6001/search/${key}`);
        result = await result.json();
        if(result) {
            setProducts(result);
        }
        }
        else{
            getProducts()
        }
        
    }

    return(
        <div className="productsList">
            <input type="text"  className = "search-product-box" placeholder = "search product"  onChange =  {handleChange} />
            <ul >
                <li>s.no</li>
                <li>name</li>
                <li>price</li>
                <li>category</li>
                <li>company</li>
                <li>action</li>
            </ul>
            {
             products&&products.map((item,index)=>
                    <ul>
                        <li>{index+1}</li>
                        <li> {item.name}</li>
                        <li> ${item.price}</li>
                        <li> {item.category}</li>
                        <li>{item.company}</li>
                        <li>
                            <button onClick={() => deleteProduct(item._id)}>delete</button>
                            <Link to={'/updateproduct/'+item._id}>update</Link>
                        </li>
                    </ul>
                )
            }
        </div>
    )
}