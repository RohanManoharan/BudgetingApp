import React, { useState } from 'react';
import axios from 'axios'
import './login-register.css';

import { FaUser, FaLock } from "react-icons/fa";

export default function Register() {

    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [nameReg, setNameReg] = useState("")

    const register = () =>{
        axios.post('http://localhost:3001/register', {
            email: emailReg,
            name: nameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <>
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" 
                    placeholder='Name' 
                    required 
                    onChange={(e) => {
                        setNameReg(e.target.value);
                    }}
                    />
                </div>
                <div className='input-box'>
                <input type="text" 
                    placeholder='Username' 
                    required 
                    onChange={(e) => {
                        setEmailReg(e.target.value);
                    }}
                    />
                </div>
                <div className='input-box'>
                <input type="password" 
                    placeholder='Password' 
                    required 
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                    />
                </div>

                <button onClick={register} className="login-btn" type='button'>Register</button>

                <div className='register-link'>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
        </>
    )
}

