import React from "react";
function ExecItem(props) {
  return (
    <div className="bg-green-500 w-1/6 rounded overflow-hidden shadow-lg">
      <div className="flex justify-center">
      <img className="w-1/2" src={props.picture} alt="exec" />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{props.name}</div>
        <div className = "text-white font-bold text-xl mb-2">{props.role}</div>
        <p className="text-gray-700 text-base">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default ExecItem;
