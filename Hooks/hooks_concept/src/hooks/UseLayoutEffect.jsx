import React, { useEffect, useLayoutEffect, useState,useRef } from 'react'

const UseLayoutEffect = () => {
    const [toggle,setToggle]=useState()
    const textRef=useRef()
   // console.log(textRef)

    useLayoutEffect(()=>{
        console.log(textRef)


if(textRef.current !=null){
      const dimension= textRef.current.getBoundingClientRect()
      console.log(dimension)
      textRef.current.style.paddingTop=`${dimension.height}px`

}
    },[toggle])

    // useLayoutEffect(()=>{
    //     console.log('useLayouteffect')
    // },[toggle])
  return (
    <>
   <button onClick={()=>setToggle(!toggle)}>Toggle</button>
   {toggle && <h4 ref={textRef}>Code Bless You</h4>}
   </>
  )
}

export default UseLayoutEffect