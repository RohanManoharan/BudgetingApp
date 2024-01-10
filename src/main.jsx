import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Monthly_Planner from './components/Monthly-Planner/Monthly_Planner.jsx';
import Login from './components/Registration/login.jsx';
import Register from './components/Registration/register.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register/>,
  },
  {
    path: "Monthly-Planner",
    element: <Monthly_Planner/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={router} />  
</React.StrictMode>,
)
