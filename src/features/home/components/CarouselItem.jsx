import { Paper } from '@mui/material'
import React from 'react'

const Item = ({ item }) => {

    return (
        <Paper sx={{ width: '100%', height: { xs: "200px", sm: '250px', md: '400px' } }}>
            <img src={item?.image} alt="" width={"100%"} height={"100%"} />
        </Paper>
    )
}

export default Item