import React from 'react'

function EventItem(props) {
  return (
    <div className="bg-green-600 rounded text-white">
        <div className="flex justify-center text-2xl">Title</div>
        <div>
            {props.text}
            <div className="flex justify-center">
                <u>Learn More</u>
            </div>
        </div>
    </div>
  )
}

export default EventItem