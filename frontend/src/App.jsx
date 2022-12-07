import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'


function App() {
  return (
    <div className='min-h-screen flex flex-col relative'>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App