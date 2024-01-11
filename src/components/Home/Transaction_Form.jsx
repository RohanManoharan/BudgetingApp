import { useState } from "react"

export function Transaction_Form({ addTransaction, date, setShowTForm}){
    const[newTransaction, setNewTransaction] = useState({ service: "", desc: "", category: "", day: date.slice(4), price: ""})

    function handleSubmit(){
        if (newTransaction.service === "") return
        addTransaction(newTransaction.service, newTransaction.desc, newTransaction.category, newTransaction.day, newTransaction.price)
        setShowTForm(false)
    }
    return(
        <form onSubmit={handleSubmit} className="transaction-form">
            <input type="text" placeholder="Service" id="transaction-service" className="transaction-input"
                value={newTransaction.service}
                onChange={e => setNewTransaction({...newTransaction, service: e.target.value})}
                required />
            <input type="text" placeholder="Description" id="transaction-desc" className="transaction-input"
                value={newTransaction.desc}
                onChange={e => setNewTransaction({...newTransaction, desc: e.target.value})}
                required />
            <select id="transaction-category" className="transaction-input" value={newTransaction.category} onChange={e => setNewTransaction({...newTransaction, category: e.target.value})} required>
                    <option value="">None</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="option...">option...</option>
            </select>
            <div className="transaction-input-block">
                Jan 
                <input type="number" min="1" max="31" id="transaction-day" className="transaction-input" placeholder={date.slice(4)} 
                value={newTransaction.day}
                onChange={e => setNewTransaction({...newTransaction, day: e.target.value})} />
            </div>
            <div className="transaction-input-block">
                $
                <input type="number" step=".01" placeholder="20.00" id="transaction-price" className="transaction-input" required
                    value={newTransaction.price}
                    onChange={e => setNewTransaction({...newTransaction, price: e.target.value})}
                />
            </div>
            <button className="transaction-button">Add</button>
        </form>
    )
}