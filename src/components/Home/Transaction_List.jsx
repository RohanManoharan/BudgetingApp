import Transaction_Item from "./Transaction_Item"

// Component that renders each of the transaction rows by mapping a component to an array
export default function Transaction_List({ transactions, month, deleteTransaction }){
    // Duplicates the array to sort it based on date
    const sorted = [...transactions].sort((a, b) => {
        return b.day - a.day
    })
    return (
        <>
        {sorted.map(transaction => {    
            return (
                <Transaction_Item transaction={transaction} key={transaction.id} month={month} deleteTransaction={deleteTransaction} />
            )
        })}
        </>
    )
}