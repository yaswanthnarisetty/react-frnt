import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[company,setCompany]=useState('')
    const [error,setError]=useState(false)
    const navigate = useNavigate();

    const addProduct =async () => {
        console.log(!name)
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }

        console.log(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        console.log(userId)
        let result = await fetch('http://localhost:6001/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,userId,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        if(result.name){
            alert('product added successfully');
            navigate('/')
        }
    }
    return (
        <div className="Addproduct-div">
        <div className="Addproduct">
            <h1>Add Product</h1>
            <input type="text" placeholder = "enter product name" value={name} onChange={(e) => setName(e.target.value)}/>
            {error && !name && <span className="invalid-input">Enter name</span>}
            <input type="text" placeholder = "enter product price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            {error && !price && <span className="invalid-input">Enter price</span>}
            <input type="text" placeholder = "enter product category" value={category} onChange={(e) => setCategory(e.target.value)}/>
            {error && !category && <span className="invalid-input">Enter category</span>}
            <input type="text" placeholder = "enter product company" value={company} onChange={(e) => setCompany(e.target.value)}/>
            {error && !company && <span className="invalid-input">Enter company</span>}
            <button onClick={addProduct}   type="button">Add product</button>
        </div>
        </div>

    )
}