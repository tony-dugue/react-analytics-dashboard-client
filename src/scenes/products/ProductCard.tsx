import React, { FunctionComponent, useState } from 'react'
import { Button, Card, CardActions, CardContent, Collapse, Rating, Typography, useTheme } from '@mui/material';
import { Theme } from "@emotion/react";
import Product from '../../models/product';
 
const ProductCard: FunctionComponent<Product> = ({ _id, name, description, price, rating, category, supply, stat }) => {

  const theme: Theme = useTheme();
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  
  return (
    <Card sx={{ backgroundImage: "none", backgroundColor: theme.palette.background.alt, borderRadius: "0.55rem" }}>

    <CardContent>
      <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[700]} gutterBottom>{category}</Typography>
      <Typography variant="h5" component="div">{name}</Typography>
      <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>${Number(price).toFixed(2)}</Typography>
      <Rating value={rating} readOnly />
      <Typography variant="body2">{description}</Typography>
    </CardContent>

    <CardActions>
      <Button color="primary" size="small" onClick={() => setIsExpanded(!isExpanded)}>
        See More
      </Button>
    </CardActions>

    <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{ color: theme.palette.neutral[300] }}>
      <CardContent>
        <Typography>id: {_id}</Typography>
        <Typography>Supply Left: {supply}</Typography>
        <Typography>Yearly Sales This Year: {stat && stat[0].yearlySalesTotal}</Typography>
        <Typography>Yearly Units Sold This Year: {stat && stat[0].yearlyTotalSoldUnits}</Typography>
      </CardContent>
    </Collapse>
  </Card>
  )
}

export default ProductCard;
