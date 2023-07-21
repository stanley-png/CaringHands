import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Vision from "./components/Vision"

/* @ts-ignore */
import("preline");
function App() {


  return (
    <main>
      <Header/>
      <HeroSection/>
      <Vision/>
    </main>
  )
}

export default App
