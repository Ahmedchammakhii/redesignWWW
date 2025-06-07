import { useEffect } from "react"
import "./style.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Skips from "./Skips"
const Listing = () => {
    
    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{

        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();
            mm.add("(min-width: 551px)", () => {
         
                    const tl = gsap.timeline({ease: "steps(6)",scrollTrigger:{
                      trigger:"#theProjEffect",
                      start:"top",
                      end:"+=400%",
                      pin:true,
                      scrub:.2,
                      toggleActions: "restart none none reverse",
                 
              }})
              tl.fromTo(".SkipTitle",{autoAlpha:0,transform:'translate3d(0,-50px,0)'},{transform:'translate3d(0,0,0)',duration:1,autoAlpha:1,stagger: {
                each: 0.2, 
                amount: 2, 
                grid: [3, 7],
                from: "random", 
                anticipatePin:1
              }})   .fromTo("#image",{y:2000,z:3000,width:"100vw",height:"100vh",yoyo:true,duration:1},{width:"70vw",height:"70vh",y:0,z:0,duration:1})
               .to(".SkipTitle",{transform:'translate3d(0,-50px,0)',duration:.5,autoAlpha:0,stagger: {
                each: 0.1, 
                amount: 3, 
                grid: [3, 7],
                from: "random", 
                anticipatePin:1
              }},) },) 
              mm.add("(max-width: 550px)", () => {
         
                const tl = gsap.timeline({ease: "steps(6)",scrollTrigger:{
                  trigger:"#theProjEffectMobile",
                  start:"top",
                  end:"+=170%",
                  pin:true,
                  scrub:.2,
                  toggleActions: "restart none none reverse",
             
          }})
          tl.fromTo(".SkipTitleMobile",{autoAlpha:0,transform:'translate3d(0,-50px,0)'},{transform:'translate3d(0,0,0)',duration:.5,autoAlpha:1,stagger: {
            each: 0.1, 
            amount: 3, 
            grid: [3, 7],
            from: "random", 
            anticipatePin:1
          }}) .fromTo("#image",{y:1000,z:3000,width:"85vw",height:"70vh",borderRadius:"2rem" ,
          },{width:"85vw",height:"70vh",borderRadius: "2rem",y:0,z:0})
          .to(".SkipTitleMobile",{transform:'translate3d(0,-50px,0)',duration:.5,autoAlpha:0,stagger: {
            each: 0.1, 
            amount: 3, 
            grid: [3, 7],
            from: "random", 
            anticipatePin:1
          }}) })

    })

    return ()=> ctx.revert()
}
    
    ,[])
  

  return (
  <div>
    <div  id="theProjEffect" style={{position:"relative", width:"100vw",height:"100vh",display:"grid",justifyItems:"center",gridTemplateColumns:"repeat(4,1fr)",gridRow:"auto",overflow:"hidden" }} >
      {Array(28).fill(0).map(((el,i)=>
<div className="SkipTitle" key={Date.UTC.toString()+Math.random()} style={{width:'min-content',height:"min-content",lineHeight:.9}}>
    <h1 style={{fontSize:"calc(1.5vw + 4rem)",fontWeight:"900",textAlign:"center" }}>{(i+1)%3==0 ? "CHOOSE" : "SKIPS®"} </h1>
    </div>
      ))}
      <Skips/>
    </div>
    <div id="theProjEffectMobile" style={{ position:"relative",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",overflow:"hidden",display:"none" }} >
      {Array(13).fill(0).map((el=>
<div key={Date.UTC.toString()+Math.random()} className="SkipTitleMobile" style={{width:'min-content',height:"min-content",lineHeight:.9}}>
    <h1 style={{fontSize:"calc(1.5vw + 4rem)",fontWeight:"900",textAlign:"center",overflow:"hidden" }}>SKIPS®</h1>
    </div>
      ))}
<Skips/>
    </div>
   
    </div>
  )
}

export default Listing