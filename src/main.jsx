import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout.jsx'
import Home from './component/Home.jsx'
import FourthPage from './component/FourthPage.jsx'
import About from './component/About.jsx'
import Education from './component/Education.jsx'
import Certificate from './component/Certificate.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/service",
        element: <FourthPage />
      },
      {
        path: "/contact",
        element: <About />
      },
      {
        path: "/education",
        element: <Education />
      },
      {
        path: "/certificate",
        element: <Certificate />
      }
    ]
  }


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
