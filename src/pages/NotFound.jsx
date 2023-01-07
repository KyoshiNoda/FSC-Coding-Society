import React from 'react'
import Navbar from '../components/Navbar/Navbar'
function NotFound() {
  return (
    <>
    <Navbar/>
      <div className='flex justify-center'>
        ERROR 404: PAGE NOT FOUND
      </div>
    </>
  )
}

export default NotFound