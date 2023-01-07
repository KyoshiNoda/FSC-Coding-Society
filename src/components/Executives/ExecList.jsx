import React from "react";
import ExecItem from "./ExecItem";
import logo from '../../imgs/acmctc-logo.png';
function ExecList() {
  let lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
  quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
  nihil.`;
  
  return (
    <div className="flex gap-11 flex-wrap">
        <ExecItem 
          name = "John Doe" 
          role = "President"
          text = {lorem}
          picture = {logo}
        />
        <ExecItem 
          name = "John Doe" 
          role = "Vice President"
          text = {lorem}
          picture = {logo}
        />
        <ExecItem 
          name = "John Doe" 
          role = "Treasurer"
          text = {lorem}
          picture = {logo}
        />
        <ExecItem 
          name = "John Doe" 
          role = "Secretary"
          text = {lorem}
          picture = {logo}
        />
    </div>
  );
}

export default ExecList;
