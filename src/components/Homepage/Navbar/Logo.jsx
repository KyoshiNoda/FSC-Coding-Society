import React from 'react'
import logo from '../../../imgs/acmctc-logo.png';
function Logo() {
  return (
    <a href = "#homepage">
    <div className="flex items-center flex-shrink-0 text-white hover:text-green-900 mr-6">
      <div>
        <img className="max-h-24 px-4" src={logo} alt="logo"></img>
      </div>
      <div className='md:flex-col'>
        <div>
          <span className="font-semibold text-4xl tracking-tight">ACM</span>
        </div>
        <div>
          <span className="font-semibold text-4xl tracking-tight">FSC</span>
        </div>
      </div>
    </div>
  </a>
  )
}

export default Logo