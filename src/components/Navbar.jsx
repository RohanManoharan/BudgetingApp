import React from 'react'

export default function Navbar(){
    return(
    <div className='navbar'>
        <div className='logo'>
            Budgeting App                
        </div>
            <ul className='navbar-menu'>
                <li><a href="/home">Home</a></li>
                {/* <li><a href="/Monthly-Planner">Monthly Planner</a></li> */}
                {/*<li><a href="/about">About</a></li> */}
            </ul>
    </div>
    )
}