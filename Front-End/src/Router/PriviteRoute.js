import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ContextProvider } from '../Pages/Context/AuthProvider'

function PriviteRoute({ children }) {
    const { user, loading } = useContext(ContextProvider)
    const location = useLocation()
    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-black border-2 h-24 w-24"></div>
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace />
}

export default PriviteRoute