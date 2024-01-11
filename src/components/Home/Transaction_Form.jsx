import { useState } from "react"

export function Transaction_Form({ addTransaction, date, setShowTForm}){
    const[newTService, setnewTService] = useState();
    const[newTDescription, setnewTDescription] = useState();
    const[newTCategory, setnewTCategory] = useState();
    const[newTDay, setnewTDay] = useState(date.slice(4));
    const[newTPrice, setnewTPrice] = useState();

    function handleSubmit(){
        if (newTService === "" || newTPrice === "") return
        addTransaction(newTService, newTDescription, newTCategory, newTDay, newTPrice)
        setShowTForm(false)
    }

    return(
        <form onSubmit={handleSubmit} className="transaction-form">
            <input type="text" placeholder="Service" id="transaction-service" className="transaction-input"
                value={newTService}
                onChange={e => setnewTService(e.target.value)}
                required />
            <input type="text" placeholder="Description" id="transaction-desc" className="transaction-input"
                value={newTDescription}
                onChange={e => setnewTDescription(e.target.value)}
                required />
            <select id="transaction-category" className="transaction-input" value={newTCategory} onChange={e => setnewTCategory(e.target.value)} required>
                    <option value="">None</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Food">Food</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                    <option value="option...">option...</option>
            </select>
            <div className="transaction-input-block">
                Jan 
                <input type="number" min="1" max="31" id="transaction-day" className="transaction-input" placeholder={date.slice(4)} 
                value={newTDay}
                onChange={e => setnewTDay(e.target.value)} />
            </div>
            <div className="transaction-input-block">
                $
                <input type="number" step=".01" placeholder="20.00" id="transaction-price" className="transaction-input" required
                    value={newTPrice}
                    onChange={e => setnewTPrice(e.target.value)}
                />
            </div>
            <button className="transaction-button">Add</button>
        </form>
    )
}