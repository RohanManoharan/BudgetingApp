import { useState } from "react";
import Navbar from "./components/Navbar";
import Money_SideBar from "./components/Home/Money_SideBar";
import Transaction_UI from "./components/Home/Transaction_UI";
import "./styles.css"

// Homepage of the App
export default function Home(){
  // Variables to get information related to dates
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let monthName = month[(new Date()).getMonth()];
  let date = (new Date()).toDateString().slice(4, 10).replace(/\b0/, '');

  // State setup
  const[money, setMoney] = useState({ total: 0, gained: 0, spent: 0 });
  const[showTForm, setShowTForm] = useState(false);
  const[transactions, setTransactions] = useState([]);
  
  // Adds the new transaction described by the arguments to the transactions list and updates the money accordingly
  function addTransaction(service, description, category, day, price){
    // Returns a new array with all previous transaction in addition to the new transaction
    setTransactions(currentTransactions => {
      return [...currentTransactions, { id: crypto.randomUUID(), service: service, desc: description, category: category, day: day, price: price }]
    })
    // Decides how to update money depending if the transaction price is negative or positive
    parseFloat(price) < 0 ? (setMoney(currentMoney => {
      return {total: currentMoney.total+parseFloat(price), gained: currentMoney.gained, spent: currentMoney.spent+parseFloat(price)}
    })) : (
      (setMoney(currentMoney => {
        return {total: currentMoney.total+parseFloat(price), gained: currentMoney.gained+parseFloat(price), spent: currentMoney.spent}
      }))
    )
  }

  // Deletes the transaction specified by the id from the list and updates the money accodingly
  function deleteTransaction(id, price){
    // Decides how to update money depending if the transaction price is negative or positive
    parseFloat(price) < 0 ? (setMoney(currentMoney => {
      return {total: currentMoney.total-parseFloat(price), gained: currentMoney.gained, spent: currentMoney.spent-parseFloat(price)}
    })) : (
      (setMoney(currentMoney => {
        return {total: currentMoney.total-parseFloat(price), gained: currentMoney.gained-parseFloat(price), spent: currentMoney.spent}
      }))
    )
    
    // Filters the array so that it excludes the transaction with the specified id
    setTransactions(currentTransactions => {
      return currentTransactions.filter(transaction => transaction.id !== id)
    })
  }

  return (
    // Components that make up the homepage
    <div className="homepage">
      <Navbar/>
      <h1 id="greeting" className="heading">Hello [NAME]!</h1>
      <Money_SideBar money={money} />
      <Transaction_UI monthName={monthName} date={date} showTForm={showTForm} setShowTForm={setShowTForm} transactions={transactions} addTransaction={addTransaction} deleteTransaction={deleteTransaction} />
    </div>
  )
}


