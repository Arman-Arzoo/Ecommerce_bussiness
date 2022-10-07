import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Pagination from '../../components/Pagination'
import CustomerCard from './components/CustomerCard'
import { customerLists } from './data'

const Customers = () => {


    return (
        <Container maxWidth="xlg" >
            <Typography variant="h4" textAlign={'center'} pt={3} >
                Customers
            </Typography>

            <Box pt={3} sx={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                {
                    customerLists?.map((item) => {
                        return (

                            <CustomerCard item={item} />
                        )
                    })
                }


            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination setPage1={3} setRowsPerPage1={6} label="Customer Per Page" count={customerLists?.length} />
            </Box>
        </Container>

    )
}

export default Customers