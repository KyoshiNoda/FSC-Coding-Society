import React from "react";

function MainEvent(props) {
  return (
    <div className="flex flex-col h-96 text-white bg-green-900">
      <div className="flex justify-center text-2xl">{props.title}</div>
      
      <div className="">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        officia incidunt ipsam fugiat totam quasi, commodi nesciunt suscipit
        omnis corrupti assumenda, at maxime nostrum neque fuga labore aut iure.
        Fugit. dolorem?
        <div className="flex justify-center">
          <u>Learn more</u>
        </div>
      </div>
    </div>
  );
}

export default MainEvent;
