import React from 'react'
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"

/* @ts-ignore */
import("preline");
function App() {


  return (
    <main>
      <Header/>
      <h1 className='text-red-500 font-bold text-3xl'>Hello world</h1>
    </main>
  )
}

export default App
