import React from 'react'
import { useLocation, Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import DashboardLayout from '../layouts/DashboardLayout'


const RequireAuth = ({ allowedRoles }) => {

    // const { auth } = useAuth()
    const auth = false
    const location = useLocation

    const roles = [1]
    console.log(allowedRoles)
    console.log(roles?.find(role => allowedRoles?.includes(role)))

    return (

        auth && roles == roles?.find(role => allowedRoles?.includes(role))
            ? <DashboardLayout />
            : auth == true
                ? <Navigate to="/dashboard/unauthorized" />
                : <Navigate to="/" />


    )

}

export default RequireAuth