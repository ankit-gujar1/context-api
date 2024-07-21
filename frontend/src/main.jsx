import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext.jsx'
import Details from './components/Details.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/details', element: <Details /> }
])

root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>,
)
