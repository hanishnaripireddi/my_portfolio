import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Works from "./components/works/Works"
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
// import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
      <Header />
      <Nav/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
      
    </>
  );
}

export default App;
