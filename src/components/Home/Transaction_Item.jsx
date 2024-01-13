export function Transaction_Item({ transaction, month, deleteTransaction }){
    return(
        <tr key={transaction.id}>
            <td id="transaction-service">{transaction.service}</td>
            <td id="transaction-desc">{transaction.desc}</td>
            <td id="transaction-category" >{transaction.category}</td>
            <td id="transaction-day">{month} {transaction.day}</td>
            <td id="transaction-price">$ {transaction.price}</td>
            <td><button className="transaction-button" onClick={() => deleteTransaction(transaction.id)}>Delete</button></td>
        </tr>
    )
}