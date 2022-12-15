import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ExecList from '../components/Executives/ExecList'
function Executives() {
  return (
    <div>
      <Navbar/>
      <div className='flex justify-center m-11 items-center'>
        <ExecList/>
      </div>
    </div>
  )
}

export default Executives