import React from 'react';
import './login-register.css';

import { FaUser, FaLock } from "react-icons/fa";

export default function Register() {
    return (
        <>
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Name' required/>
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required/>
                </div>

                <button className="login-btn" type='submit'>Register</button>

                <div className='register-link'>
                    <p>Already have an account? <a href="/login">Login</a></p>
                </div>
            </form>
        </div>
        </>
    )
}

