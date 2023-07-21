import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Vision from "./components/Vision"
import Contacts from "./components/Contacts"

/* @ts-ignore */
import("preline");
function App() {


  return (
    <main>
      <Header/>
      <HeroSection/>
      <Vision/>
      <Contacts/>
    </main>
  )
}

export default App
