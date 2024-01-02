export default function App(){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  let monthName = month[(new Date()).getMonth()];

  return (
    <>
    <h1 id="month">{monthName}</h1>
    <div></div>
    </>
  )

}


