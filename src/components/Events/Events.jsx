import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchBar from "./SearchBar/SearchBar";
function Events() {
  return (
    <div className="">
      <Navbar />
      <SearchBar />

      <div className="flex-col">

        <div className="bg-green-800 justify-center h-96 text-white">
          <div className="flex justify-center"> Main Event Title</div>
          <div className=" items-end">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aut
            hic doloribus laborum quam ad minus, eveniet velit maiores nostrum
            expedita autem, corrupti earum blanditiis! Cum incidunt voluptate
            modi iure. Cum veritatis rem, nesciunt explicabo nam tempore vitae
            aperiam architecto officia tenetur pariatur aliquam sunt dolores.
            Expedita animi quisquam quam ex recusandae voluptate asperiores hic
            tenetur, sapiente tempora et dolorem?
            <div className="flex justify-center"> <u>Learn more</u></div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div>
          <div>Title</div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odit illum, autem ipsam ut facere nisi est numquam, culpa itaque neque doloremque ullam delectus eveniet recusandae porro explicabo amet. Perspiciatis!
            Dicta ipsum facere illum, tenetur officia culpa odio neque sed et delectus autem, ea maxime a asperiores eius recusandae, incidunt quisquam excepturi quasi temporibus assumenda? Sunt minima dolore itaque eaque!
            <div className= "flex justify-center">
              <u>Learn More</u>
            </div>
          </div>
        </div>
        <div>
          <div>Title</div>
          <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis odit illum, autem ipsam ut facere nisi est numquam, culpa itaque neque doloremque ullam delectus eveniet recusandae porro explicabo amet. Perspiciatis!
            Dicta ipsum facere illum, tenetur officia culpa odio neque sed et delectus autem, ea maxime a asperiores eius recusandae, incidunt quisquam excepturi quasi temporibus assumenda? Sunt minima dolore itaque eaque!
            <div className="flex justify-center">
              <u>Learn More</u>
            </div>
          </div>
        </div>
      </div>

      

      



    </div>

    
  );
}

export default Events;
