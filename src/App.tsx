import React from 'react'
import { Link, Element } from "react-scroll";
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import Vision from "./components/Vision"
import Contacts from "./components/Contacts"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

/* @ts-ignore */
import("preline");
function App() {


  return (
    <main>
      <Header/>
      <Element name="home">

      <HeroSection/>
      </Element>
      <Vision/>
      <Element name="contacts">

      <Contacts/>
      </Element>
      <Element name="gallery">
      <Gallery/>
      </Element>
      <Footer/>

    </main>
  )
}

export default App
