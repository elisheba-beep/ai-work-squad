import React from 'react'
import Signin from '../../containers/signin'

interface loginProps{
  setToken:Function
}

export default function Login({setToken}:loginProps) {
  return (
    <div>
        <Signin setToken={setToken}/>
    </div>
  )
}
