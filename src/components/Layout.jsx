import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {
    const location = useLocation();

  return (
    <div className='grid-layout'>
        
        <aside className='container-aside'>
        <h1 className='title'>CUSTOMERS - CRM</h1>
            <div className='link-container'>
            <Link className={`link ${location.pathname === '/'? 'link-Selected':''}`} to={'/'}>Customers</Link>
            <Link className={`link ${location.pathname === '/customers/add'? 'link-Selected':''}`}  to={'/customers/add'}>Add new customer</Link>
            </div>
        </aside>
        <main className='main-container'>
            <h1 className='main-title'>{location.pathname === '/customers/add'? 'Create new customer': 'Manage your customers'}</h1>
            <p className='main-title-p'>{location.pathname === '/customers/add'? 'Complete all fields to add a new entry.': 'Customer list'}</p>
            <Outlet />
        </main>
      
    </div>
  )
}

export default Layout
