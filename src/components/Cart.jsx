import React from 'react'
import { useCartContext } from './cartcontext/CartContext'

function Cart() {

    const {  cartList, borrarCarrito  } = useCartContext()

    return (
        <div>
            {  cartList.map(prod=> <li>{prod.name}   {prod.cantidad}</li>) }
            <button onClick={borrarCarrito} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart
