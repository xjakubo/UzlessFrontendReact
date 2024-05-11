import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './routes/home.tsx'
import Printer from './routes/printer.tsx'
import Contractor from './routes/contractor.tsx'
import Order from './routes/order.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/printer",
    element: <Printer />
  },
  {
    path: "/contractor",
    element: <Contractor />
  },
  {
    path: "/order",
    element: <Order />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
