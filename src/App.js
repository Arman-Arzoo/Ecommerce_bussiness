import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import theme from './theme/index'
import MainLayout from './layouts/MainLayout'
import { Link } from 'react-router-dom'

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Box >
                <CssBaseline />
                <MainLayout />
            </Box>
        </ThemeProvider >
    )
}

export default App