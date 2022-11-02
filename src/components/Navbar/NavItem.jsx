import React from 'react'

function NavItem(props) {
  return (

    <a href = {props.route} className="hidden lg:visible justify-end mt-4 lg:inline-block text-white hover:text-green-900 mr-4 font-bold px-2">
    {props.text}
    </a>
  )
}

export default NavItem