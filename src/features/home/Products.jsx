import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Pagination from '../../components/Pagination'
import ProductCard from './components/ProductCard'
import { productLists } from './data'

const Products = () => {
    return (
        <Container maxWidth="xlg" >
            <Typography variant="h4" textAlign={'center'} pt={3} >
                Products
            </Typography>

            <Box pt={3} sx={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    productLists?.map((item) => {
                        return (

                            <ProductCard item={item} />
                        )
                    })
                }


            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination setPage1={3} setRowsPerPage1={6} label="Product Per Page" count={productLists?.length} />
            </Box>
        </Container>

    )
}

export default Products