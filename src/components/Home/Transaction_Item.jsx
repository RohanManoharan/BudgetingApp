// Component that renders a transaction as a table row
export default function Transaction_Item({ transaction, month, deleteTransaction }){
    return(
        <tr>
            <td id="transaction-service" className="table-data" >{transaction.service}</td>
            <td id="transaction-desc" className="table-data" >{transaction.desc}</td>
            <td id="transaction-category" className="table-data" >{transaction.category}</td>
            <td id="transaction-day" className="table-data" >{month} {transaction.day}</td>
            <td id="transaction-price" className="table-data" >$ {transaction.price}</td>
            <td><button id="delete-button" className="button transaction-button" onClick={() => deleteTransaction(transaction.id, transaction.price)}>Delete</button></td>
        </tr>
    )
}