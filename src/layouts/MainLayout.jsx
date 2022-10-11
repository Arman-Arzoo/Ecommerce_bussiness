
import React from 'react'
import AuthLayout from './AuthLayout'
import DashboardLayout from './DashboardLayout'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Missing from '../components/Missing'
import Dashboard from '../pages/Dashboard'
import One from '../features/dashboard/One'
import Two from '../features/dashboard/Two'
import Three from '../features/dashboard/Three'
import RequireAuth from '../components/RequireAuth'
import Unauthorized from '../components/Unauthorized'

const MainRoutes = () => {
    return (

        <Routes>
            {/* dashboard routes */}
            <Route path="/dashboard" element={<DashboardLayout />}>
                {/* public route */}
                <Route path="unauthorized" element={<Unauthorized />} />

                {/* protected route */}
                {/* admin */}
                <Route element={<RequireAuth allowedRoles={[0, 1, 2]} />}>
                    <Route index element={<Dashboard />} />

                </Route>


                {/* provider */}
                <Route element={<RequireAuth allowedRoles={[1]} />}>
                    <Route path='one' element={<One />} />
                    <Route path='two' element={<Two />} />
                </Route>

                {/* admin */}
                <Route element={<RequireAuth allowedRoles={[2]} />}>
                    <Route path='three' element={<Three />} />
                </Route>




                {/* catch all */}
                <Route path='/dashboard/*' element={<Missing />} />

            </Route>
            {/* user Route */}
            <Route path="/" element={<AuthLayout />}>
                {/* public route */}
                <Route path='/' element={<Home />} />

                {/* protected route */}

                {/* catch all */}
                <Route path='*' element={<Missing />} />

            </Route>

        </Routes>

    )
}

export default MainRoutes