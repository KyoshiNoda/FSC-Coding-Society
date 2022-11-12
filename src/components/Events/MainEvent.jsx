import React from "react";

function MainEvent(props) {
  return (
    <div className="flex flex-col h-96 text-white bg-green-900 rounded px-11">
      <div className="flex justify-center text-2xl font-bold">{props.title}</div>
      
      <div className="mt-auto mb-10">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem ipsa quaerat provident illum assumenda, nam earum facilis doloribus velit voluptatem ullam quis culpa aliquid maiores? Maiores, est! Officia, quod voluptate!
        Amet accusamus blanditiis cumque, ad est ab officia dolorem pariatur a eaque! Ea molestias voluptatibus ut obcaecati, libero vel quisquam eligendi quam voluptates! Eligendi delectus a ab, nemo cum facilis!
        <div className="flex justify-center">
          <a href = "#test"><u>Read More</u></a>
        </div>
      </div>
    </div>
  );
}

export default MainEvent;
