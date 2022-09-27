import { Box, Divider } from '@mui/material'
import React from 'react'
import { Carousel, Products, Customers } from '../features/home'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'

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