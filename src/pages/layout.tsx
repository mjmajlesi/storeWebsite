import React, { useContext } from 'react'
import { Tchildern } from '../components/container'
import { ThemeContext } from './toggleTheme'
export default function Layout({children}:Tchildern) {

  const {theme} = useContext(ThemeContext)
  return (
    <div className={`${theme}`}>
        {children}
    </div>
  )
}
