export function Money_SideBar({ money }){
    return(
        <div id="side-content">
            <div id="money-total" className="module">
                <h1>Total Balance</h1>
                <h1 className="amounts">$ {money.total}</h1>
            </div>

            <div id="money-gained" className="module">
                <h1>Money Gained</h1>
                <h1 className="amounts">+ $ {money.gained}</h1>
            </div>

            <div id="money-spent" className="module">
                <h1>Money Spent</h1>
                <h1 className="amounts">- $ {money.spent*(-1)}</h1>
            </div>
        </div>
    )
}