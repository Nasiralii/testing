// import { useEffect, useState } from "react"

// export default function Home() {
//   const [data,setData]=useState([])
//   const fetchData = async () => {
//     const res=await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data=await res.json()
//     console.log(data)
//     setData(data.splice(0,10))
//   }
//   useEffect(()=>{
//     fetchData()
//   })
//   return (
//   <>
//   <div className="">
//    {data.map((val,i)=>{
//     return(
//       <div className="" key={i+1}>
//       {val.completed==true ? 
//       <div className="border">
//           {val.title}
//         </div> :
//         <div></div>}
//       </div>
//     )
//    })}
//   </div>
//   </>
//   )
// }

import React, { useState } from 'react'
import Showdata from '@/components/AddingData/Showdata'
import AddData from '@/components/AddingData/AddData'
function index() {
  const [value,setValue]=useState([])
  console.log(value)
  return (
    <div className=''>
     <Showdata value={value}/>
    
     <AddData value={value} setValue={setValue} />
    </div>
  )
}

export default index
