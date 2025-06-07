import { useEffect } from "react"
import "./style.css"
import Flip from "gsap/dist/Flip";
import gsap from "gsap";
const Navbar = ({SelectedSkip}) => {
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
    {SelectedSkip &&
      <div className="step skipselected ">
     <div className="stepinfo">
      <h4>01 <span style={{fontSize:"smaller",fontWeight:200}}>skip</span></h4>
      <h4 style={{color:"var(--lightgreen)",paddingLeft:10}}>Selected</h4>
    </div>
         <div className="skipinfo">
          <p>item : {SelectedSkip.size}yard skip</p>
          <p>price :£ {SelectedSkip.price_before_vat} </p>
</div>
<div className="roundButton" style={{scale:.7,cursor:"pointer"}}>Prev</div>
<div className="roundButton" style={{scale:.7,background:"var(--lightgreen)",color:"#000",cursor:"pointer",border:0}}>Next→</div>
    </div>}
    </nav >
  )
}

export default Navbar
