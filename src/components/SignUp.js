import React, {useEffect, useState} from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() =>{
        const auth = localStorage.getItem('user');
        if (auth){
            navigate("/")
        }
    })
    const collectData = async () =>{
        let result = await fetch('http://localhost:6001/register',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        localStorage.setItem('user',JSON.stringify(result));
        if(result)
        {

            navigate('/')
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <div className="formDiv">
            <input className="inputBox" type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder = 'enter Name'/>
            <input className="inputBox" type='text'  value={email} onChange={(e) => setEmail(e.target.value)} placeholder = 'enter Email'/>
            <input className="inputBox" type='password'  value={password} onChange={(e) => setPassword(e.target.value)} placeholder = 'enter Password'/>
            <button  onClick={collectData} type="button">signup</button>
            </div>
        </div>
    )
}