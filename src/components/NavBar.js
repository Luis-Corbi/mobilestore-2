import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/img/logo.png';
import { ShoppingCart } from '@material-ui/icons';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';



function AppBarLabel(label) {
  const [{basket}, dispatch] = useStateValue();
  return (
    <Toolbar>
      <Link to="/">
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <img alt="logo" src={logo} height={50}/>
      </IconButton>
      </Link>
      <Typography variant="h3" noWrap component="div" sx={{ flexGrow: 1 }}>
      {label}
      </Typography>
      <Link to="/sign-in">
      <Button color="inherit" fontSize='large'>Sign in</Button>
      </Link>
      <Link to="checkout-page">
      <Button color='inherit'>
        <Badge badgeContent={basket?.length} color="secondary">
          <ShoppingCart/>
        </Badge>
      </Button>
      </Link>
    </Toolbar>
  );
 }

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

export default function appbar() {
    return (
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="primary">
            {AppBarLabel('Mobilestore')}
          </AppBar>
        </ThemeProvider>
      </Stack>
    );
  }
