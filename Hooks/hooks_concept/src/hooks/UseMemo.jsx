import React ,{useMemo, useState}from 'react'

const UseMemo = () => {

    const [number,setNumber]=useState(0)
    const [dark,setDark]=useState(false)
    // const calculation=expensiveFunction(number)
//useeffect and usememo is same but it in usuememo we can returnn the value  and store into variable but not in useeffect   in useeffect we can update the  value by taking setState fuction
   const memoCal= useMemo(()=>{
return expensiveFunction(number)
    },[number])

    const cssStyle={
        backgroundColor:dark?"blue ":"white",
        color:dark?"white":"black"

    }
  return (
    <div style={cssStyle}>
        <input
        
        onChange={(e)=>setNumber(e.target.valueAsNumber)}
        type='number'
        value={number}
        
        />

        <h2>Calculation :{ memoCal}</h2>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )

  
}

function expensiveFunction(num){
    console.log('Loop started')
    for (let i=0; i<10000000;i++){
        return num;
    }
}

export default UseMemo