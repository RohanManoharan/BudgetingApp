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

    {/* Shows transactions from the current month */}
    <div id="transactions">
      <button type="button">Add Transaction</button>
      <table>
        <tr>
          <th>Service</th>
          <th>Description</th>
          <th>Category</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td><input type="text" placeholder="Service"></input></td>
          <td><input type="text" placeholder="Description"></input></td>
          <td><select>
                <option>Entertainment</option>
                <option>Food</option>
                <option>Miscellaneous</option>
                <option>option...</option>
              </select></td>
          <td>[Current Date]</td>
          <td>$ <input type="text" placeholder="Amount"></input></td>
        </tr>
        <tr>
          <td>Steam</td>
          <td>Hades lol</td>
          <td>Entertainment</td>
          <td>Jan 22th</td>
          <td>$ 36.73</td>
        </tr>
        <tr>
          <td>stuff</td>
          <td>desc</td>
          <td>Miscellaneous</td>
          <td>Jan 3th</td>
          <td>$ 20.00</td>
        </tr>
        <tr>
          <td>stuff again</td>
          <td>desc</td>
          <td>Miscellaneous</td>
          <td>Jan 1st</td>
          <td>$ 22.70</td>
        </tr>
      </table>
    </div>
    </>
  )
}


