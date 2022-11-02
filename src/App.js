import React from "react";
import {Routes,Route} from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Events from "./pages/Events";
import News from './pages/News';
import Executives from './pages/Executives';
function App() {
  return (
    <Routes>
      <Route path="/" element = {<Homepage/>}/>
      <Route path="/Events" element = {<Events/>}/>
      <Route path ="/News" element = {<News/>}/>
      <Route path = "/Executives" element = {<Executives/>}/>
    </Routes>
  );
}

export default App;
