import React from 'react'
import "./App.css"
import { Routes,Route } from 'react-router-dom'
import DashBoard from './Pages/DashBoard/DashBoard'
import MainLayout from './layout/MainLayout/MainLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/task' element={<DashBoard/>}/>
        <Route path='/notes' element={<DashBoard/>}/>
        <Route path='/goals' element={<DashBoard/>}/>
        <Route path='/calender' element={<DashBoard/>}/>
        <Route path='/habit' element={<DashBoard/>}/>
      </Route>
    </Routes>
  )
}

export default App