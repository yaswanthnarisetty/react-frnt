import React, { useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";

export default function UpdateProduct() {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[company,setCompany]=useState('')
    const navigate = useNavigate();
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    })

    const getProductDetails = async () =>{
        let result = await fetch(`http://localhost:6001/product/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompany(result.company)
    }


    const updateProduct =async () => {
     console.log(name,price,category,company)
    }
    return (
        <div className="Addproduct-div">
        <div className="Addproduct">
            <h1>Add Product</h1>
            <input type="text" placeholder = "enter product name" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder = "enter product price" value={price} onChange={(e) => setPrice(e.target.value)}/>            <input type="text" placeholder = "enter product category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            <input type="text" placeholder = "enter product company" value={company} onChange={(e) => setCompany(e.target.value)}/>
             <button onClick={updateProduct}   type="button">Update product</button>
        </div>
        </div>

    )
}