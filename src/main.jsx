import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider, BrowserRouter, Routes, Route
} from "react-router-dom";

import Home from './Home.jsx'
import Monthly_Planner from './components/Monthly-Planner/Monthly_Planner.jsx';
import Login from './components/Registration/login.jsx';
import Register from './components/Registration/register.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Register/>,
//   },
//   {
//     path: "/login",
//     element: <Login/>,
//   },
//   {
//     path: "home",
//     element: <Home/>,
//   },
//   {
//     path: "Monthly-Planner",
//     element: <Monthly_Planner/>,
//   },
// ]);

export default function App() {
  const [nameReg, setNameReg] = useState("")
  // function handleUsername(e)  {
  //   setNameReg(e.target.value);
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register nameReg={nameReg} setNameReg={setNameReg} handleUsername={e => setNameReg(e.target.value)}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="home" element={<Home nameReg={nameReg}/>}></Route>
        <Route path="Monthly-Planner" element={<Monthly_Planner />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* <RouterProvider router={router} />   */}
  <App />
</React.StrictMode>,
)
