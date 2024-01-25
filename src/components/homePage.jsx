import React from 'react'
import AppBar from './appBar'
import { Outlet } from 'react-router-dom'
import StickyFooter from './stickyFooter'
import ThemeProviderComponent from './themeProvider'

export default function homePage() {
  return (
    <ThemeProviderComponent>
    <div>
       <AppBar /> 
       <Outlet />
       <StickyFooter />
    </div>
    </ThemeProviderComponent>
  )
}
