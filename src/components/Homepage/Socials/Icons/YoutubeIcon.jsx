import React from 'react'
import {AiOutlineYoutube} from 'react-icons/ai';
import { IconContext } from "react-icons";
function YoutubeIcon(props) {
  return (
    <a href = {props.link}>
        <div className='flex justify-center items-center w-40 h-40 bg-gradient-to-tl from-green-900 to-green-400 rounded-2xl hover:from-green-500 hover:to-green-300'>
        <IconContext.Provider value={{ color: "white", size:"100px"}}>
            <AiOutlineYoutube/>
        </IconContext.Provider>
        </div>
    </a>
  )
}

export default YoutubeIcon