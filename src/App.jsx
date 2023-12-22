import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import Home from "./Pages/Home";
import Popular from "./Pages/Popular";
import Trending from "./Pages/Trending";
import Top from "./Pages/Top";
import Searching from "./Pages/searching";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/popular" Component={Popular} />
        <Route path="/trending" Component={Trending} />
        <Route path="/top" Component={Top} />
        <Route path="/search" Component={Searching} />
      </Routes>
    </>
  );
}

export default App;
