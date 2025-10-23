import React from 'react'
import Home from "../pages/Home"
import {Route, Routes}  from "react-router-dom"
import RegisterPage from '../pages/Authentication/RegisterPage'

import LoginPage from '../pages/Authentication/LoginPage'
import DashboardRoutes from './DashboardRoutes'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard/*" element={<DashboardRoutes/>} />
    </Routes>
  )
}

export default MainRoutes