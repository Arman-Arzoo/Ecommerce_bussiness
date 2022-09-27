import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CustomerCard = ({ item }) => {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia
                component="img"
                // maxWidth={"345px"}
                width={"345"}
                height="180"
                image={item?.url}
                alt={item?.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item?.customerName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item?.customerDescription}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default CustomerCard