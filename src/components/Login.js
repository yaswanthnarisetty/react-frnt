import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate = useNavigate();
    useEffect(() =>{
        const auth = localStorage.getItem('user');
        if (auth){
            navigate("/")
        }
    })
    const handleLogin =async () => {
        console.log(email , password)
        let result = await fetch('http://localhost:6001/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
         result = await result.json();
         console.log(result);
            if(result.name){
                alert('login success');
                localStorage.setItem('user',JSON.stringify(result));
                navigate('/');
            }
            else{
                alert("please enter correct details");
            }

        
    }
    return (
        <div>
           <h1>Login</h1>
            <div className="formDiv">
                <input className="inputBox" type='text'  placeholder = 'enter Email' 
                onChange={(e) => setEmail(e.target.value)} value = {  email}/>
                <input className="inputBox" type='password'  placeholder = 'enter Password'
                onChange={(e) => setPassword(e.target.value)} value = {password}/>
                <button onClick={handleLogin} type="button">Login</button>
            </div>
        </div>
    )
}