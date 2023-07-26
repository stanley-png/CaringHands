/* @ts-ignore */
import { Element } from "react-scroll";
/* @ts-ignore */
import Header from "./components/Header"
/* @ts-ignore */
import HeroSection from "./components/HeroSection"
/* @ts-ignore */
import Vision from "./components/Vision"
/* @ts-ignore */
import Partners from "./components/Partners"
/* @ts-ignore */
import Contacts from "./components/Contacts"
/* @ts-ignore */
import Gallery from "./components/Gallery"
/* @ts-ignore */
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
      
      <Partners/>
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
