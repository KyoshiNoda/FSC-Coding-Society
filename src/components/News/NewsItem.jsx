import React from 'react'

function NewsItem() {
  return (
    <div className='flex flex-col w-72 h-72 rounded bg-slate-500 text-white '>
      <div className=' text-center font-bold text-2xl'>
        News Title
      </div>
      <div className=' self-end'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus molestias minus, magni delectus porro amet sapiente ipsum deleniti impedit nostrum! Quasi eveniet culpa ipsam deserunt ducimus modi minus natus sint!
        <div className='text-center '>
          <u>Read More</u>
        </div>
      </div>
    </div>
  )
}

export default NewsItem