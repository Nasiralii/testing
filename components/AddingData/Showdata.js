import React from 'react'

function Showdata(props) {
  return (
   <>
    <div className='border h-[400px] w-[80%] flex mx-auto my-8 p-8 text-center '>
   <div className='flex flex-col'>
   {props.value.map((val,i)=>{
    return(
      <div key={i+1}>
      { val }
      </div>
    )
   })}
   </div>
    </div>
   </>
  )
}

export default Showdata