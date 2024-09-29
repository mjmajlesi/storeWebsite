import React, { ChangeEvent, useState } from 'react'
import Container from '../components/container'
import Button from '../components/buttuns'
import { useAppContext } from '../components/AppContext'

function Login() {
  const {handleLogin} = useAppContext()
  const [user , setUser] = useState({
    username : "",
    password : ""
  });

  const TargetValue = (e : ChangeEvent<HTMLInputElement>)=>{
    const {name , value} = e.target
    setUser({
      ...user , 
      [name] : value
        })
  }
  return (
    <Container>
      <div className='bg-slate-500 rounded-md p-4'>
          <label htmlFor="name"> Name : </label>
          <input onChange={TargetValue} id='name' type="text"  placeholder='name...' name="username" value={user.username} />
          <label htmlFor="Password"> Password : </label>
          <input onChange={TargetValue} id='Password' type="text" placeholder='Password...' name="Password" value={user.password}/>
          <Button onClick={()=> handleLogin(user.username , user.password)} variant='seccece' className='block !p-2 mt-4 mb-2'>Login</Button>
      </div>
    </Container>
  )
}

export default Login