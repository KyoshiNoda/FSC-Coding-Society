import React from "react";

function MainEvent(props) {
  return (
    <div className="flex flex-col h-96 text-white bg-green-900 rounded px-11">
      <div className="flex justify-center text-2xl">{props.title}</div>
      
      <div className="">
        {props.text}
        <div className="flex justify-center">
          <a href = "#test">
            <u>Read More</u>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainEvent;
