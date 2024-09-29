import React from 'react'
import { useAppContext } from './AppContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
    const {login} = useAppContext()
  return (
    <>
        {login ? <Outlet /> : <Navigate to={"/login"} />}
    </>
  )
}

export default PrivateRoute