import { useEffect } from "react"
import "./style.css"
import Flip from "gsap/dist/Flip";
import gsap from "gsap";
const Navbar = () => {
  gsap.registerPlugin(Flip) 
  useEffect(()=>{
const state = Flip.getState(".step",{props:"opacity"});
Flip.from(state, {
  duration: 1,
  ease: "power1.inOut",
  absolute: true,
});

  },[])
  
  return (
    <nav className="navbar__container" >
   <div className="step mainVisible">
     <div className="stepinfo">
      <h4>03 <span style={{fontSize:"smaller",fontWeight:200}}>select skip</span></h4>
      <h4 style={{color:"var(--lightgreen)",paddingLeft:10}}>STEP</h4>
    </div>
    </div>
    </nav >
  )
}

export default Navbar
