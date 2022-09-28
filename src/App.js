import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import Home from './pages/Home'
import theme from './theme/index'

const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <Box >
                <CssBaseline />
                <Home />
                {/* <Example /> */}
            </Box>
        </ThemeProvider >
    )
}

export default App