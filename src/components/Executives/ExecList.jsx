import React from "react";
import ExecItem from "./ExecItem";
function ExecList() {
  return (
    <div className="flex flex-col space-y-11">
      <div className="flex">
        <ExecItem />
        <ExecItem />
      </div>
      <div className="flex">
        <ExecItem />
        <ExecItem />
      </div>
    </div>
  );
}

export default ExecList;
