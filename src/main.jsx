import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Paths from './Web_Routes/Paths'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={Paths}></RouterProvider>
  </React.StrictMode>,
)
