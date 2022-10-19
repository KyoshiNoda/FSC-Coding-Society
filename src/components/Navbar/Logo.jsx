import React from 'react'
import logo from '../../imgs/acmctc-logo.png';
function Logo() {
  return (
    <a href = "#homepage">
    <div className="flex items-center flex-shrink-0 text-white hover:text-green-900 mr-6">
      <img className="max-h-24 px-4" src={logo} alt="logo"></img>
      <span className="font-semibold text-5xl tracking-tight">ACM FSC</span>
    </div>
  </a>
  )
}

export default Logo