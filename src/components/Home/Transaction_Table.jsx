import { Transaction_Form } from "./Transaction_Form";
import { Transaction_List } from "./Transaction_List";

export function Transaction_Table({ monthName, date, showTForm, setShowTForm, transactions, addTransaction, deleteTransaction }){
    return (
        <>
            <h1 id="table-month">{monthName}</h1>
            <div id="transactions">
                <button type="button" id="add-transaction" onClick={() => setShowTForm(true)}>Add New Transaction</button>
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