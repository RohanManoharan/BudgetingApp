import { useState } from "react"

// Form for the user to input info about their transaction oonsisting of the service, a description, a category, the date it was made and the amount
export default function Transaction_Form({ addTransaction, date, setShowTForm}){
    const[newTransaction, setNewTransaction] = useState({ service: "", desc: "", category: "", day: date.slice(4), price: ""})

    // On the submit of the form, the new transaction is added and the form is set to not show
    function handleSubmit(){
        if (newTransaction.service === "") return
        addTransaction(...Object.values(newTransaction))
        setShowTForm(false)
    }

    return(
        <form onSubmit={handleSubmit} className="inline-form" id="transaction-form">
            <input type="text" placeholder="Service" id="transaction-service-input" className="transaction-input"
                value={newTransaction.service}
                onChange={e => setNewTransaction({...newTransaction, service: e.target.value})}
                required />
            <input type="text" placeholder="Description" id="transaction-desc-input" className="transaction-input"
                value={newTransaction.desc}
                onChange={e => setNewTransaction({...newTransaction, desc: e.target.value})}
                required />
            <select id="transaction-category" className="transaction-input" value={newTransaction.category} onChange={e => setNewTransaction({...newTransaction, category: e.target.value})} required>
                    <option value="">None</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Miscellaneous">Miscellaneous</option>
            </select>
            <div className="transaction-input-block">
                Jan 
                <input type="number" min="1" max="31" id="transaction-day-input" className="transaction-input" placeholder={date.slice(4)} 
                value={newTransaction.day}
                onChange={e => setNewTransaction({...newTransaction, day: e.target.value})} />
            </div>
            <div className="transaction-input-block">
                $
                <input type="number" step=".01" placeholder="20.00" id="transaction-price-input" className="transaction-input" required
                    value={newTransaction.price}
                    onChange={e => setNewTransaction({...newTransaction, price: e.target.value})}
                />
            </div>
            <button id="add-transaction-button" className="button transaction-input transaction-button">Add</button>
        </form>
    )
}