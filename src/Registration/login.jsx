import React from 'react';
import './login-register.css';

import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Email' required/>
                    <FaUser className='icon'/>
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required/>
                    <FaLock className='icon'/>

                </div>

                <div className='remember-forgot'>
                    <label htmlFor=""><input type="checkbox" />Remember Me</label>
                    <a href="#">Forgot Password?</a>
                </div>

                <button className="login-btn" type='submit'>Login</button>

                <div className='register-link'>
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

