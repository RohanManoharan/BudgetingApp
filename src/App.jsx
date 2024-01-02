import "./styles.css"

export default function App(){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let monthName = month[(new Date()).getMonth()];
  let moneyGained = 0;
  let moneySpent = 0;

  return (
    <>
    <h1 id="month" className="module">Month of {monthName}</h1>
    
    <div id="side-content">
      <div id="money-gained" className="module">
        <h1>Money Gained</h1>
        <h2 className="amounts">+ {moneyGained}</h2>
      </div>

      <div id="money-spent" className="module">
        <h1>Money Spent</h1>
        <h2 className="amounts">- {moneySpent}</h2>
      </div>
    </div>
    </>
  )

}


