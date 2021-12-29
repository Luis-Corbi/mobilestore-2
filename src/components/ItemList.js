import memo from 'react'
import Item from './ItemDetail'

const ItemList = memo( 
({ productos })=> {
    console.log('itemList')
    return (
        <>
            { productos.map((prod) => <Item prod= {prod} />)  }
        </>
    )
}

, (oldProps, newProps)=> oldProps.productos.length === newProps.productos.length ) 

export default ItemList
