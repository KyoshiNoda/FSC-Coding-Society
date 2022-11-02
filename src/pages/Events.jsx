import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/Events/SearchBar/SearchBar";
import MainEvent from "../components/Events/MainEvent";
function Events() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <MainEvent/>
      
      <div className="flex">
        <div className="bg-red-600 ">
          <div className="flex justify-center text-2xl">
            Title
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            odit illum, autem ipsam ut facere nisi est numquam, culpa itaque
            neque doloremque ullam delectus eveniet recusandae porro explicabo
            amet. Perspiciatis! Dicta ipsum facere illum, tenetur officia culpa
            odio neque sed et delectus autem, ea maxime a asperiores eius
            recusandae, incidunt quisquam excepturi quasi temporibus assumenda?
            Sunt minima dolore itaque eaque!
            <div className="flex justify-center">
              <u>Learn More</u>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-center">Title</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            odit illum, autem ipsam ut facere nisi est numquam, culpa itaque
            neque doloremque ullam delectus eveniet recusandae porro explicabo
            amet. Perspiciatis! Dicta ipsum facere illum, tenetur officia culpa
            odio neque sed et delectus autem, ea maxime a asperiores eius
            recusandae, incidunt quisquam excepturi quasi temporibus assumenda?
            Sunt minima dolore itaque eaque!
            <div className="flex justify-center">
              <u>Learn More</u>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
