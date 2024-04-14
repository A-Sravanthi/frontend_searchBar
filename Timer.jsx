import { useEffect } from "react"
import { useState } from "react"

export default function Timer({interval}){
   const [time,setTime]=useState(0)
  
   useEffect(() =>{
      console.log("useEffect")
   const i=setInterval(() => {
      setTime(t=>t+1)
   },1000)
   return () =>{
      clearInterval(i)
   }
},[interval])
   
      
   return (
      <div> 
      <h2> Timer</h2>
      <p> {time}</p>
      </div>
   )
}