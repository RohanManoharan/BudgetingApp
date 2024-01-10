import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Monthly_Planner from './Monthly-Planner/Monthly_Planner.jsx';
import Login from './Registration/login.jsx';
import Register from './Registration/register.jsx';
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
