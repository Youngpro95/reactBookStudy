import React from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from './redux/user'

function Login() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>{
        dispatch(login({name : "영민", age : 28 , email : "young@gmail.com"}))
      }}>
        Login
      </button>
      <button onClick={()=>{
        dispatch(logout())
      }}>
        LogOut
      </button>
    </div>
  )
}

export default Login