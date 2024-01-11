import { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles.css"
import { Transaction_Form } from "./components/Home/Transaction_Form";
import { Transaction_List } from "./components/Home/Transaction_List";

export default function App(){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let monthName = month[(new Date()).getMonth()];
  let date = (new Date()).toDateString().slice(4, 10).replace(/\b0/, '');

  const [money, setMoney] = useState({ total: 0, gained: 0, spent: 0 });
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
    setTransactions(currentTransactions => {
      return currentTransactions.filter(transaction => transaction.id !== id)
    })
  }

  function newTransaction(){
    setShowTForm(true);
  }

  return (
    <>
    <Navbar/>

    <h1 id="greeting">Hello [NAME]!</h1>
    
    {/* Side content for money information */}
    <div id="side-content">
      <div id="money-total" className="module">
        <h1>Total Balance</h1>
        <h1 className="amounts">$ {money.total}</h1>
      </div>

      <div id="money-gained" className="module">
        <h1>Money Gained</h1>
        <h1 className="amounts">+ $ {money.gained}</h1>
      </div>

      <div id="money-spent" className="module">
        <h1>Money Spent</h1>
        <h1 className="amounts">- $ {money.spent*(-1)}</h1>
      </div>
    </div>

    {/* Shows transactions from the current month */}
    <h1 id="table-month">{monthName}</h1>
    <div id="transactions">
      <button type="button" id="add-transaction" onClick={newTransaction}>Add New Transaction</button>
      {showTForm && <Transaction_Form addTransaction={addTransaction} date={date} setShowTForm={setShowTForm} />}

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Description</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount (+/-)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Transaction_List transactions={transactions} month={monthName.slice(0, 3)} deleteTransaction={deleteTransaction} />
        </tbody>
      </table>
      {transactions.length === 0 && "No Transactions for this Month"}
    </div>
    </>
  )
}


