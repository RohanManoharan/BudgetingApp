export function Transaction_List({ transactions }){
    return (
        <>
        {transactions.map(transaction => {
            return (
                <tr key={transaction.id}>
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