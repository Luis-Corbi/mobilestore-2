import React from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import {getBasketTotal} from '../reducer';
import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh",
    }
}))

const Total = () => {
    const classes = useStyles()
    const [{basket}] = useStateValue();
    return (
        <div className={classes.root}>
            <h5>Total item: {basket?.length}</h5>
            <h5> {accounting.formatMoney(6069.97)}</h5>
            <Link to="/checkout">
            <Button className={classes.button} variant='contained' color="secondary">Confirmar compra</Button>
            </Link>
        </div>
    )
}

export default Total