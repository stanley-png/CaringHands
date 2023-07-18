import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"

/* @ts-ignore */
import("preline");
function App() {


  return (
    <main>
      <Header/>
      <HeroSection/>
    </main>
  )
}

export default App
