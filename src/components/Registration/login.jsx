import React, { useState } from 'react';
import axios from 'axios'
import './login-register.css';

import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const navigate = useNavigate();
    const [loginStatus, setLoginStatus] = useState("");

    const login = () =>{
        axios.post('http://localhost:3001/login?', {
            email: emailLog,
            password: passwordLog
        }).then(response => {

            if(response.data.message){
                setLoginStatus(response.data.message)
            } else {
                setLoginStatus(response.data[0].email)
                navigate("/home")
            }
        });
    };

    return (
        <>
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                <input type="text" 
                    placeholder='Username' 
                    required 
                    onChange={(e) => {
                        setEmailLog(e.target.value);
                    }}/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                <input type="password" 
                    placeholder='Password' 
                    required 
                    onChange={(e) => {
                        setPasswordLog(e.target.value);
                    }}/>
                    <FaLock className='icon'/>

                </div>

                <button className="login-btn" type='button' onClick={login}>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <a href="/">Register</a></p>
                </div>

                <h1>{loginStatus}</h1>
            </form>
        </div>
        </>
    )
}

