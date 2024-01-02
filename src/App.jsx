import "./styles.css"

export default function App(){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let monthName = month[(new Date()).getMonth()];
  let moneyGained = 0;
  let moneySpent = 0;

  return (
    <>
    <div id="side-content">
      <h1 id="month" className="heading">Month of {monthName}</h1>
      
      <div>
        <h1>Money Gained</h1>
        <h2>+{moneyGained}</h2>
      </div>

      <div>
        <h1>Money Spent</h1>
        <h2>-{moneySpent}</h2>
      </div>
    </div>
    </>
  )

}


