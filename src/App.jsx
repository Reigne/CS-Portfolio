import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      
      <Routes>
        <Route path="/" element={<Home />} exact="true" />
      </Routes>
    </div>
  );
}

export default App;
