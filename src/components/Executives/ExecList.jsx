import React from "react";
import ExecItem from "./ExecItem";
import logo from '../../imgs/FarmingdaleCodingSociety2.png';
function ExecList() {
  let lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
  quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
  nihil.`;

  return (
    <div className="flex gap-11 flex-wrap justify-evenly">
      <ExecItem
        name="Llyas Hasanoff"
        role="President"
        text={lorem}
        picture={logo}
      />
      <ExecItem
        name="Mike Odnis"
        role="Vice President"
        text={lorem}
        picture={logo}
      />
      <ExecItem
        name="Edson Murillo"
        role="Treasurer"
        text={lorem}
        picture={logo}
      />
      <ExecItem
        name="Enmanuel Proano"
        role="Secretary"
        text={lorem}
        picture={logo}
      />
      <ExecItem
        name="Ryan Ng"
        role="Secretary"
        text={lorem}
        picture={logo}
      />
    </div>
  );
}

export default ExecList;
