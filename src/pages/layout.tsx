import React from 'react'
import { Tchildern } from '../components/container'
export default function Layout({children}:Tchildern) {
  return (
    <div className=' bg-amber-50'>
        {children}
    </div>
  )
}
