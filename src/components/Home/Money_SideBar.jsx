// The sidebar shows info related to the user's money
export default function Money_SideBar({ money }){
    return(
        <div id="side-content" className="container">
            <div id="money-total" className="module">
                <h1 className="heading">Total Balance</h1>
                <h1 className="heading amounts">$ {money.total}</h1>
            </div>

            <div id="money-gained" className="module">
                <h1 className="heading">Money Gained</h1>
                <h1 className="heading amounts">+ $ {money.gained}</h1>
            </div>

            <div id="money-spent" className="module">
                <h1 className="heading">Money Spent</h1>
                <h1 className="heading amounts">- $ {money.spent*(-1)}</h1>
            </div>
        </div>
    )
}