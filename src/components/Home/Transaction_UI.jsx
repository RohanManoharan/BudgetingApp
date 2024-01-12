import Transaction_Form from "./Transaction_Form";
import Transaction_List from "./Transaction_List";

// component rendering the transaction UI which includes a heading, button, form, and table
export default function Transaction_UI({ monthName, date, showTForm, setShowTForm, transactions, addTransaction, deleteTransaction }){
    return (
        <div id="transactions-container" className="container">
            <h1 className="heading" id="table-month">{monthName}</h1>
            {/* The appearance of the form is dependent on the button press */}
            <button className="button long-button" type="button" id="new-transaction-button" onClick={() => setShowTForm(true)}>Add New Transaction</button>
            {showTForm && <Transaction_Form addTransaction={addTransaction} date={date} setShowTForm={setShowTForm} />}

            <table id="transaction-table">
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
                {/* The body of the table are transactions each represented by a table row */}
                <Transaction_List transactions={transactions} month={monthName.slice(0, 3)} deleteTransaction={deleteTransaction} />
                </tbody>
            </table>
            {/* If there are no transactions a message displays that relays this info */}
            {transactions.length === 0 && "No Transactions for this Month"}
        </div>
    )
}