import React from 'react'
import ReactDOM from 'react-dom/client'
import {createHashRouter, RouterProvider} from "react-router-dom";
import {App} from './app.jsx'
import {Inicio} from './inicio.jsx'
import {Login} from './login.jsx'
import "bootstrap/dist/css/bootstrap.min.css";

const router = createHashRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement:<h1>hola te equivocaste</h1>
  },
  {
    path:"/login",
    element:<Login></Login>,
  },
  {
    path:"/inicio",
    element:<Inicio></Inicio>,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
