import React, { useEffect, useState,useRef } from 'react'

const UseRef = () => {
    const[name,setName]=useState('')
  
//     useEffect(()=>{
// setCount(prev=>prev+1)
//     },[name])

const count=useRef(0)
const inputEle=useRef()
console.log(count)
useEffect(()=>{
    count.current=count.current+1
})

const handleClick=()=>{
console.log(inputEle)
inputEle.current.style.width="300px"
inputEle.current.focus()
}


  return (
    <div>

        <input type='text'  onChange={(e)=>setName(e.target.value)} /> 
        <div>Name:{name}</div>
        <div>Render:{count.current}</div>

        <input type='text' ref={inputEle} />

        <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default UseRef