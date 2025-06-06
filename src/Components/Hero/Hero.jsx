
import gsap from "gsap";
import "./style.css"
import SplitText from "gsap/dist/SplitText";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
const Hero = () => {
    gsap.registerPlugin(SplitText,ScrollTrigger);
useEffect(()=>
{
const ctx = gsap.context(()=>{
let split = SplitText.create("#AnimatedTextHero", { type: "words", aria: "hidden" });
const tl=gsap.timeline({scrollTrigger:{
    trigger:"#AnimatedTextHero",
    start:"top bottom",
    scrub:true
}})
  tl.from(split.words, {
    opacity: 0,
    duration: 2,
    ease: "sine.out",
    stagger: 0.1,
  })
})},[])
  return (
    <div className="Hero__container" >
      <p>Discover available Skips®</p>
      <h1 id="AnimatedTextHero">Choose the one that suits your needs the best</h1>
      <div className="Hero__container_informationFlex"  >
        <div className="left_sideFlex">
      <p className="mid_size">You can choose one of those skips in our offer. Each of our Skips provides the highest quality and meets the standards adjusted to your needs. Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
</p>    </div>

        <div className="right_sideFlex" >
    <p style={{fontWeight:300}}>All Skips has built based on the same rules:</p>
    <div className="rules_rows">
<div className="right__sideFlex_row">
    <div className="roundButton">
        <p>Sustainable</p>
    </div>
       <div className="roundButton">
        <p>Reliable</p>
    </div>   <div className="roundButton">
        <p>Solid

</p>
    </div>
</div>
<div className="right__sideFlex_row">
    <div className="roundButton">
        <p>resistant
</p>
    </div>
       <div className="roundButton">
        <p>Robust</p>
    </div>   <div className="roundButton">
        <p>Compact</p>
    </div>
</div>
        </div>
    </div>
    </div>
  </div>
  

)
}

export default Hero
