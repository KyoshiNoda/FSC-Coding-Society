import React from "react";
import logo from "../../imgs/acmctc-logo.png";
function ExecItem() {
  return (
    <div class="bg-green-500 max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={logo} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-2xl mb-2">John Doe</div>
        <div class = "text-white font-bold text-xl mb-2">ROLE</div>
        <p class="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  );
}

export default ExecItem;
