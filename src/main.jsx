import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index, {loader as customerLoader} from '../pages/Index'
import FormNewCustomers, {action as actionForm} from '../pages/FormNewCustomers'
import Layout from './components/Layout'
import Edit, {loader as editLoader, action as actionEdit} from '../pages/Edit'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: customerLoader,

      },
      {
        path: '/customers/add',
        element: <FormNewCustomers />,
        action: actionForm,
      },
      {
        path: '/customers/:customerID/edit',
        element: <Edit/>,
        loader: editLoader,
        action: actionEdit,
      },
      
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
