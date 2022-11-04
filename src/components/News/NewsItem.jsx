import React from 'react'

function NewsItem(props) {
  return (
    <div className='flex flex-col w-72 h-72 rounded bg-green-900 text-white '>
      <div className=' text-center font-bold text-2xl'>
        {props.title}
      </div>
      <div className=' self-end'>
        {props.text}
        <div className='text-center '>
          <a href = "#test">
            <u>Read More</u>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem