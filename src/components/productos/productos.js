import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Producto from './producto';
import productsdata from '../../products-data';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Productos() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
          {
              productsdata.map(producto => (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Producto key={producto.id} producto={producto}/>
                </Grid>
              ))
          }
        
      </Grid>
    </Box>
  );
}
