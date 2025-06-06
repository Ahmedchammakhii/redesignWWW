

const Skips = () => {

 
    return (
      <section style={{ position:"absolute",zIndex:4,width: "100vw", background: "transparent",height:"100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
        <div id="image-container"  style={{cursor:"pointer", position: "relative",display: "flex", alignItems: "center", flexDirection: "column",justifyContent:"center" }}>
        <div onClick={e=>{e.currentTarget.style.border="10px solid #fff"; e.currentTarget.firstElementChild.innerHTML="Selected"}}
        id="image" style={{display:"flex",alignItems:"center",justifyContent:"center",  width: "70vw", height: "70vh", borderRadius: "2rem", backgroundImage: 'url("/16-yarder-skip.jpg")', backgroundSize: "cover",backgroundPosition:"center",overflow:"hidden" }}>
          <h1 style={{position:"absolute",right:20,top:20,color:"#000",borderRadius: "2rem ",padding:"0 20px", background:"#fff"}}>8 yard</h1>

          <h1 style={{position:"absolute",right:20,bottom:20,color:"#000",borderRadius: "2rem 1rem",padding:"0 20px", background:"var(--lightgreen)"}}>214$</h1>
          
          <h1 style={{position:"absolute",left:0,bottom:0,color:"#fff",padding:"0 20px",zIndex:-1,width:"100%",backgroundColor:"#161515",height:"100px"}}>4 Yard Skip</h1>
           <p style={{position:"absolute",left:0,bottom:30,color:"#fff",padding:"0 20px"}}>          14 day hire period</p>
          </div> 

        </div>

      </section>
   
      
  )
}
export default Skips