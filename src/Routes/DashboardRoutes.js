import React from 'react'
import { Route, Routes } from 'react-router-dom'

const DashboardRoutes = () => {

    return (
        <Routes>
            <Route path='/dashboard' element={<h1>arman</h1>}></Route>
        </Routes>
    )
}

export default DashboardRoutes