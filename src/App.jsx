import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import AboutMe from "./components/pages/AboutMe";
import Asesories from "./components/pages/Asesories";
import ContactMe from "./components/pages/ContactMe";
import Foot from "./components/Foot";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
      </header>

      <main className="bg-black text-light">
        <Routes>
          <Route path="/" element={<Home />}/>
          {/* <Route path="/aboutme" element={<AboutMe />}/> */}
          {/* <Route path="/asesories" element={<Asesories />}/> */}
          {/* <Route path="/contactme" element={<ContactMe />}/> */}
        </Routes>
      </main>

      <footer>
        <Foot />
      </footer>
    </BrowserRouter>
  );
}

export default App;
