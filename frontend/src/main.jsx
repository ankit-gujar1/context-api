import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserContextProvider from './contexts/UserContext.jsx'
import Details from './components/contextComponents/Details.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/details', element: <Details /> }
])

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </Provider>
  </React.StrictMode>,
)
