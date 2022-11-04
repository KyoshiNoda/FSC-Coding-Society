import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SearchBar from "../components/Events/SearchBar";
import MainEvent from "../components/Events/MainEvent";
import EventItem from "../components/Events/EventItem";
function Events() {
  let lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos esse non ratione quam minima, 
  vero nesciunt, quisquam accusamus voluptate voluptatibus, sequi itaque rem incidunt autem! Molestias vitae assumenda dolorem sed.`;
  return (
    <>
      <Navbar />
      <SearchBar />
      <div className="flex flex-col gap-y-11 m-11">
        <div>
         <MainEvent title = "Main Event Title" text = {lorem}/>
        </div>
        
        <div className="flex gap-7">
          <EventItem text = {lorem}/>
          <EventItem text = {lorem}/>
        </div>
      </div>
    </>
  );
}

export default Events;
