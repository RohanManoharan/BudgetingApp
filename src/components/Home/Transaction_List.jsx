import { Transaction_Item } from "./Transaction_Item"

export function Transaction_List({ transactions, month, deleteTransaction }){
    const sorted = [...transactions].sort((a, b) => {
        return b.day - a.day
    })
    return (
        <>
        {sorted.map(transaction => {    
            return (
                <Transaction_Item transaction={transaction} month={month} deleteTransaction={deleteTransaction} />
            )
        })}
    </>
    )
}