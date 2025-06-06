import gsap from "gsap";
import { useState } from "react";


const Skips = ({data,error,loading,mobile=false,setSkip}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

 if (loading) return (<h1>LOADING</h1>)
  if (error) return (<h1>Oups {error}</h1>)
    return (
      <section style={{ position:"absolute",zIndex:4,width: "100vw", background: "transparent",height:"100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
      <div id="image-container"  style={{cursor:"pointer",position: "relative",display: "flex", alignItems: "center", flexDirection: "column",justifyContent:"center" }}>
     {data.map((el,i)=>   <div key={"skipontainer"+i} onClick={e=>{setSkip(el) ; setSelectedIndex(i) ;gsap.matchMedia().add("(max-width:600px)",()=>{
      gsap.to(".mainVisible",{visibility:"hidden",position:"absolute"})
     }) ;gsap.to(".mainVisible",{width:"20%",ease:"circ.out"})}}
        id={ !mobile ?"image"+i :"imageMob"+i } style={{display:"flex", filter: selectedIndex === i ? "invert(.7)" : "none",border: selectedIndex === i ? "10px solid #fff" : "none",position:"absolute",alignItems:"center",justifyContent:"center",  width: "70vw", height: "70vh", borderRadius: "2rem", backgroundImage: 'url("/16-yarder-skip.jpg")', backgroundSize: "cover",backgroundPosition:"center",overflow:"hidden" }}>
          <h1 style={{position:"absolute",right:20,top:20,color:"#000",borderRadius: "2rem ",padding:"0 20px", background:"#fff"}}>8 yard</h1>

          <h1 style={{position:"absolute",right:20,bottom:20,color:"#000",borderRadius: "2rem 1rem",padding:"0 20px", background:"var(--lightgreen)"}}>£ {el.price_before_vat}</h1>
               {el.allowed_on_road &&     <p style={{position:"absolute",right:0,bottom:50,color:"yellow",padding:"0 20px", background:"#000"}}>Not allowed on road !</p>
}
          <h1 style={{position:"absolute",left:0,bottom:0,color:"#fff",padding:"0 20px",zIndex:-1,width:"100%",backgroundColor:"#161515",height:"100px"}}>{el.size} Yard Skip</h1>
           <p style={{position:"absolute",left:0,bottom:30,color:"#fff",padding:"0 20px"}}>          {el.hire_period_days} day hire period</p>
          </div> 
)}
        </div>

      </section>
   
      
  )
}
export default Skips