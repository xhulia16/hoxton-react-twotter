import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './components/header'
import { LeftMenu } from './components/LeftMenu'
import { RightMenu } from './components/RightMenu'
import { Home } from './pages/Home'
import { PageNotFound } from './pages/pageNotFound'

function App() {

  return (
    <div className="App">
      <LeftMenu/>
    <main>
    <Header />
     <Routes>
      <Route index element={< Navigate to='/home' />} />
     <Route path= '/home' element={<Home/>}/>
     <Route path='*' element={<PageNotFound />} />
     </Routes>
     </main>
     <RightMenu/>
    </div>
  )
}

export default App
