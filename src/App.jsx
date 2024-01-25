import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/homePage'
import FavouritesPage from './components/favouritesPage'
import './App.css'
import Filler from './components/filler'

export default function App() {
  return (
    <div>
    <Routes> 
      <Route path='/' element={<HomePage />}>
        <Route index element={<Filler />} />
        <Route path='favouritesPage' element={<FavouritesPage />} />
      </Route>
    </Routes>
    </div>
  )

}
