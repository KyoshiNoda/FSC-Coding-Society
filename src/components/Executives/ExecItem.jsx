import React from "react";
// import logo from "../../imgs/acmctc-logo.png";
function ExecItem(props) {
  return (
    <div class="bg-green-500 max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex justify-center">
      <img class="w-1/2" src={props.picture} alt="exec" />
      </div>

      <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2">{props.name}</div>
        <div class = "text-white font-bold text-xl mb-2">{props.role}</div>
        <p class="text-gray-700 text-base">
          {props.text}
        </p>
      </div>
    </div>
  );
}

export default ExecItem;
