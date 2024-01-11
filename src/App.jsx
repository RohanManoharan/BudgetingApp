import { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css"
import { Money_SideBar } from "./components/Home/Money_SideBar";
import { Transaction_Table } from "./components/Home/Transaction_Table";

export default function App(){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let monthName = month[(new Date()).getMonth()];
  let date = (new Date()).toDateString().slice(4, 10).replace(/\b0/, '');
  
  const[money, setMoney] = useState({ total: 0, gained: 0, spent: 0 });
  const[showTForm, setShowTForm] = useState(false);
  const[transactions, setTransactions] = useState([]);
  
  function addTransaction(service, description, category, day, price){
    setTransactions(currentTransactions => {
      return [...currentTransactions, { id: crypto.randomUUID(), service: service, desc: description, category: category, day: day, price: price }]
    })
    parseFloat(price) < 0 ? (setMoney(currentMoney => {
      return {total: currentMoney.total+parseFloat(price), gained: currentMoney.gained, spent: currentMoney.spent+parseFloat(price)}
    })) : (
      (setMoney(currentMoney => {
        return {total: currentMoney.total+parseFloat(price), gained: currentMoney.gained+parseFloat(price), spent: currentMoney.spent}
      }))
    )
  }

  function deleteTransaction(id){
    let price = 0
    transactions.forEach(transaction => {
      if(transaction.id === id){
        price = transaction.price
      }
    })
    parseFloat(price) < 0 ? (setMoney(currentMoney => {
      return {total: currentMoney.total-parseFloat(price), gained: currentMoney.gained, spent: currentMoney.spent-parseFloat(price)}
    })) : (
      (setMoney(currentMoney => {
        return {total: currentMoney.total-parseFloat(price), gained: currentMoney.gained-parseFloat(price), spent: currentMoney.spent}
      }))
    )

    setTransactions(currentTransactions => {
      return currentTransactions.filter(transaction => transaction.id !== id)
    })
  }

  return (
    <>
    <Navbar/>
    <h1 id="greeting">Hello [NAME]!</h1>
    <Money_SideBar money={money} />

    {/* Shows transactions from the current month */}
    <Transaction_Table monthName={monthName} date={date} showTForm={showTForm} setShowTForm={setShowTForm} transactions={transactions} addTransaction={addTransaction} deleteTransaction={deleteTransaction} />
    </>
  )
}


