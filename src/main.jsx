import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Paths from './Web_Routes/Paths'
import AuthContext from './Contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={Paths}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
