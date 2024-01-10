export function Transaction_List({ transactions }){
    return (
        <>
        {transactions.length === 0 && <p style={{position: "absolute", marginLeft: "500px"}}>No Transactions for this Month</p>}
        {(transactions.reverse()).map(transaction => {
            return (
                <tr>
                    <td>{transaction.service}</td>
                    <td>{transaction.desc}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                    <td>$ {transaction.price}</td>
                    <td><button className="transaction-button">Edit</button></td>
                </tr>
            )
        })}
        </>
    )
}