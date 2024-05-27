import React, { useContext } from 'react'
import {LoginContext}  from '../hooks/UseContext'


const SIngle = () => {
  const login=useContext(LoginContext)
  console.log(login)
  return (
    <div>jjii</div>
  )
}

export default SIngle