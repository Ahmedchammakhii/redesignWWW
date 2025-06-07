import { useEffect } from "react"
import "./style.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import Skips from "./Skips"
import useFetch from "../../Hooks/useFetch"
const Listing = ({setSkip}) => {
        const { data, loading, error } = useFetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');

    gsap.registerPlugin(ScrollTrigger);
    useEffect(()=>{
  if (!data || data.length === 0) return;

        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();
            mm.add("(min-width: 551px)", () => {
         
                    const tl = gsap.timeline({scrollTrigger:{
                      trigger:"#theProjEffect",
                      start:"top",
                      end:"+=800%",
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
              }})  
            

  requestAnimationFrame(() => {
    data.forEach((_, i) => {
      const el = document.getElementById(`image${i}`);
      if (el) {
  tl.fromTo(el,{y:"100vh",z:3000,width:"85vw",height:"70vh",borderRadius:"2rem" ,
          },{width:"90vw",height:"70vh",borderRadius: "2rem",y:(i+2)*10,z:0})
          
          
      }
  })
})
           
          
          },) 
              mm.add("(max-width: 550px)", () => {
         
                const tl = gsap.timeline({ease: "steps(6)",scrollTrigger:{
                  trigger:"#theProjEffectMobile",
                  start:"top",
                  end:"+=700%",
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
          }})
     requestAnimationFrame(() => {
    data.forEach((_, i) => {
      const el = document.getElementById(`imageMob${i}`);
      if (el) {
  tl.fromTo(el,{y:"100vh",z:3000,width:"85vw",height:"70vh",borderRadius:"2rem" ,
          },{width:"85vw",height:"70vh",borderRadius: "2rem",y:(i+2)*10,z:0})
          
          
      }
  })
})
          tl.to(".SkipTitleMobile",{transform:'translate3d(0,-50px,0)',duration:.5,autoAlpha:0,stagger: {
            each: 0.1, 
            amount: 3, 
            grid: [3, 7],
            from: "random", 
            anticipatePin:1
          }}),'<' })

    })

    return ()=> ctx.revert()
}
    
    ,[data])
  

  return (
  <div>
    <div  id="theProjEffect" style={{position:"relative", width:"100vw",height:"100vh",display:"grid",justifyItems:"center",gridTemplateColumns:"repeat(4,1fr)",gridRow:"auto",overflow:"hidden" }} >
      {Array(28).fill(0).map(((el,i)=>
<div className="SkipTitle" key={i+'skips'} style={{width:'min-content',height:"min-content",lineHeight:.9}}>
    <h1 style={{fontSize:"calc(1.5vw + 4rem)",fontWeight:"900",textAlign:"center" }}>{(i+1)%3==0 ? "CHOOSE" : "SKIPS®"} </h1>
    </div>
      ))}
<Skips data={data} error={error} loading={loading} setSkip={setSkip}/>
    </div>
    <div id="theProjEffectMobile" style={{ position:"relative",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",overflow:"hidden",display:"none" }} >
      {Array(13).fill(0).map(((el,i)=>
<div  key={i+'skipsMobile'} className="SkipTitleMobile" style={{width:'min-content',height:"min-content",lineHeight:.9}}>
    <h1 style={{fontSize:"calc(1.5vw + 4rem)",fontWeight:"900",textAlign:"center",overflow:"hidden" }}>SKIPS®</h1>
    </div>
      ))}
<Skips data={data} error={error} loading={loading} mobile={true} setSkip={setSkip}/>
    </div>
   
    </div>
  )
}

export default Listing