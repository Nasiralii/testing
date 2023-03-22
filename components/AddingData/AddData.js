import { useState } from "react"
function AddData({value,setValue}) {
  const [text ,setText]=useState("");
  const [data,setData]=useState("");
  const handleClick=(e)=>{
    e.preventDefault()
    if(value.find((val)=>val===text)){
      alert("Error")
      setText("")
    }
    else{
      setValue((old)=>[text,...old])
      setData(text)
    }
        setText("")
  }
  return (
   <>
<form onSubmit={handleClick}>
<div className='border h-[200px] w-[60%] flex flex-col gap-2 mx-auto my-8 p-8 text-center '>
        <input type="" value={text} onChange={(e)=>setText(e.target.value)} className='border w-full  p-3'/>
        <button type="submit" className='border px-8 py-2' onClick={handleClick} >add </button>
      </div>
</form>
   </>
  )
}

export default AddData