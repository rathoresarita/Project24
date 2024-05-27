import React,{useEffect,useState} from 'react'

const CustomHooks = (url) => {
    const [responses,setResponses]=useState([])
   
    useEffect(()=>{
fetch(url).then((res)=>res.json())
.then((data)=>setResponses(data))
    },[])
  return (
   responses
  )
}

export default CustomHooks