import React from 'react'

function EventItem(props) {
  return (
    <div className="bg-green-600 rounded h-40 text-white">
        <div className="flex justify-center text-2xl font-bold">Title</div>
        <div>
            {props.text}
            <div className="flex justify-center">
            <a href = "#test1">
                <u>Read More</u>
            </a>
            </div>
        </div>
    </div>
  )
}

export default EventItem