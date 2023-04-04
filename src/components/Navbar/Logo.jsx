import React from 'react'
import logo from '../../imgs/FarmingdaleCodingSociety2.png';
function Logo() {
  return (
    <a href = "/">
    <div className="flex items-center flex-shrink-0 hover:text-green-700 mr-6">
      <div>
        <img className="max-h-24 px-4" src={logo} alt="logo"></img>
      </div>
      <div className='md:flex-col'>
        <div>
          <span className="font-semibold text-4xl tracking-tight">FSC Coding</span>
        </div>
        <div>
          <span className="font-semibold text-4xl tracking-tight">Society</span>
        </div>
      </div>
    </div>
  </a>
  )
}

export default Logo