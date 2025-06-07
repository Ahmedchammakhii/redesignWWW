
import { useState } from 'react'
import './App.css'
import Marquee from './Components/HeaderMarquee/Marquee'
import Hero from './Components/Hero/Hero'
import Listing from './Components/Listing/Listing'
import Navbar from './Components/Navbar/Navbar'
function App() {
      const [SelectedSkip,setSkip] = useState(null)

  return (
  <div id='mainApp'> 
  <Navbar SelectedSkip={SelectedSkip}/>
  <Marquee/>
  <Hero/>
  <Listing setSkip={setSkip} SelectedSkip={SelectedSkip} />
  
  </div>
  )
}

export default App
