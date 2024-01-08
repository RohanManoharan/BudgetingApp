import React from 'react'
import Navbar from "../components/Navbar";
import "../styles.css"


export default function Monthly_Planner(){
    let monthBugdetRem = 0;

    return(
        <>
        <Navbar/>

        <div id="budget-remaining" className="module">
            <h1>Monthly Budget Remaining</h1>
            <h1 className="amounts">{monthBugdetRem}</h1>
        </div>

        <div className="grid">
            <div className="item"><h1>Entertainment</h1></div>
            <div className="item"><h1>Food</h1></div>
            <div className="item"><h1>Rent</h1></div>
            <div className="item"><h1>Miscellaneous</h1></div>
            <div className="item" id="add-more"><h1>+</h1></div>
        </div>
        </>
    )
}