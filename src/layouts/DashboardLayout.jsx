
import React from 'react'
import { Outlet } from 'react-router-dom'

const DashboardLayout = ({ children }) => {
    return (

        <main>
            <Outlet />
            {/* <DashboardRoutes /> */}
        </main>

    )
}

export default DashboardLayout