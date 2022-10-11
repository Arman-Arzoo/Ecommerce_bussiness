import { Box, Divider } from '@mui/material'
import React from 'react'
import { Carousel, Products, Customers } from '../features/home'
import Footer from '../components/ui/Footer'
import Navbar from '../components/ui/Navbar'

const Home = () => {
    return (
        <Box >
            <Navbar />
            <Carousel />
            <Products />
            <Divider />
            <Customers />
            <Footer />
        </Box>
    )
}

export default Home