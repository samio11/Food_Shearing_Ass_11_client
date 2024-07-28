import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Paths from './Web_Routes/Paths'
import AuthContext from './Contexts/AuthContext'
import toast, { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthContext>
        <RouterProvider router={Paths}></RouterProvider>
        <Toaster />
      </AuthContext>
    </HelmetProvider>
  </React.StrictMode>,
)
