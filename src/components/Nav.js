import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../App.css'

export default function Nav() {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div>
            {auth ?
                <ul className="navClass">
                    <li><Link to='/'>home</Link></li>
                    
                    <li><Link onClick={logout} to='/signup'>logout ({JSON.parse(auth).name})</Link></li>
                    {/* <li>{auth?<Link onClick={logout} to='/signup'>logout</Link>:<Link to='/signup'>signup</Link>}</li>
                <li><Link to='/login'>login</Link></li> */}
                </ul>
                :
                <ul className="navClass2">
                    <li><Link to='/signup'>signup</Link></li>
                    <li><Link to='/login'>login</Link></li>
                </ul>
            }
        </div>
    )
}