import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import { useStateValue } from '../../StateProvider';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from 'accounting';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { actionTypes } from '../../reducer';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Producto({producto : {id, marca, name, price, foto, categoria, rating, descripcion}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () =>(
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        marca,
        name,
        price,
        foto,
        categoria, 
        rating, 
        descripcion,
      }
    })
  )
  
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
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {marca} {categoria}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to cart' onClick={addToBasket}>
          <AddShoppingCart fontSize='large'/>
        </IconButton>
        {Array(rating)
        .fill()
        .map((_, i) => (
            <p>&#11088;</p>
        ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {descripcion}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}