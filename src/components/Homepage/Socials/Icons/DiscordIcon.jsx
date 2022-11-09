import React from 'react'
import {BsDiscord} from 'react-icons/bs';
import { IconContext } from "react-icons";
function DiscordIcon(props) {
  return (
    <a href = {props.link}>
        <div className='flex justify-center items-center w-20 h-20 bg-gradient-to-tl from-green-900 to-green-400 rounded'>
        <IconContext.Provider value={{ color: "white", size:"50px"}}>
            <BsDiscord/>
        </IconContext.Provider>
        </div>
    </a>
  )
}

export default DiscordIcon