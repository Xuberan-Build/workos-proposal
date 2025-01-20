// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from '@/components/layout/Navigation'
import Home from '@/pages/Home'
import Strategy from '@/pages/Strategy'

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategy" element={<Strategy />} />
      </Routes>
    </>
  )
}

export default App
