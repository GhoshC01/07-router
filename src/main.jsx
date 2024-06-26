import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { Toaster } from 'react-hot-toast';

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
      { path: "User/:userid", element: <User /> },
      { path: "/Login", element: <Login /> },
      { path: "/Register", element: <Register /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={true}
    />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
