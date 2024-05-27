import React,{createContext} from 'react'
import MainC from '../hooks/MainC'


//creating context

export const  LoginContext=createContext()
const UseContext = () => {
  return (
<LoginContext.Provider value={true}>
  <div>

<MainC></MainC>
</div>
</LoginContext.Provider>
  )
}

export default UseContext