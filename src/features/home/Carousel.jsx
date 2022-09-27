import { Button, Paper } from '@mui/material'
import { Box, height } from '@mui/system'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Item from './components/CarouselItem'
import { imageList } from './data'

const carousel = () => {

    return (
        <Box mt={"0.5rem"}>
            <Carousel indicators={false}>
                {
                    imageList.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </Box>
    )
}



export default carousel