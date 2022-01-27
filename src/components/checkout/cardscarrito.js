import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@mui/material';
import { useStateValue } from '../../StateProvider';
import { actionTypes } from '../../reducer';

const useStyles = makeStyles((theme) =>({
    root: {
        maxWidth: 345,
    },
    action: {
        marginTop: '1rem',
    },
    media: {
        height: 0,
        paddingTop: "56.25%",
    },
    CardActions: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },
    cardrating: {
        display: "flex"
    }
}));


export default function Checkoutcard({product : {id, name, price, foto, rating}}) {
  const classes = useStyles();
  const [{basket}, dispatch] = useStateValue();
  
  const removeItem = ()=> dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
  })

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
      
      action={
        <Typography
        variant='h5'
        color= "textSecondary"
        >
        {accounting.formatMoney(price)}
        </Typography>
      }
      title={name}
      subheader="en Stock"
      />
      <CardMedia
        component="img"
        image={foto}
        alt="imagen del producto"
      />
      <CardActions disableSpacing className={classes.CardActions}>
        <div className={classes.cardrating}>
        {Array(rating)
        .fill()
        .map((_, i) => (
            <p>&#11088;</p>
        ))}
        </div>
        <IconButton>
          <DeleteIcon fontSize='large' onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}