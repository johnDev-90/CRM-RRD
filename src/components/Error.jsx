import React from 'react'

const Error = ({children}) => {
  return (
    <div className='errorMessage'>
      <p >{children}</p>
    </div>
  )
}

export default Error
