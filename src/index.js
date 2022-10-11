import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import './assests/global.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/AuthProvider'


const root = ReactDom.createRoot(document.getElementById('root'))

root.render(

    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
)

