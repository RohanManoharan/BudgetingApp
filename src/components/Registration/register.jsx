import React, { useState } from 'react';
import Axios from 'axios'
import './login-register.css';

import { FaUser, FaLock } from "react-icons/fa";

export default function Register() {

    const [emailReg, setEmailReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [nameReg, setNameReg] = useState("")

    const register = () =>{
        Axios.post('http://localhost3001/', {
            email: emailReg,
            name: nameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    }

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
                    placeholder='Email' 
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

                <button onClick={register} className="login-btn" type='submit'>Register</button>

                <div className='register-link'>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
        </>
    )
}

