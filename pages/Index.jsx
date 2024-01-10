import React from 'react'
import { useLoaderData } from 'react-router-dom';
import Data from '../src/components/Data';
import { getCustomers } from '../Calls.js';
import Btns from '../src/components/Btns.jsx';

export function loader({params}){
    
     const customers = getCustomers()


    return customers


}

const Index = () => {
    const customer = useLoaderData();

  return (
    <div>
      {customer.length >= 0? (
         <table>
         <thead>
             <tr className='table-tr'>
                 <th>Name</th>
                 <th>Contact</th>
                 <th>Acction</th>
             </tr>
         </thead>
     <tbody>
         {customer.map(clients => (
            <Data
            key={clients.id}
            clients = {clients}
            />
            
         ))}
     
     </tbody>
        
        
     </table>

      ):(
        <h1>No jay clientes para mostrar</h1>
      )}
  
    </div>
  )
}

export default Index
