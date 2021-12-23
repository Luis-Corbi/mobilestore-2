import {useState} from 'react'
import CartWidget2 from './CartWidget2'
import CartWidget3 from './Cartwidget3'
 


const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
        setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
    }

    return (
        <div className="w-50">
            <button className="btn-floating btn-large waves-effect waves-light red" onClick={handlerAdd}><CartWidget2 /></button>
            <label className="contador">{count}</label>
            <button className="btn-floating btn-large waves-effect waves-light red" onClick={handlerRm}><CartWidget3 /></button><br />
            <button className="btn waves-effect waves-light btn-small #f44336 red" onClick={handlerOnAdd}>Agregar</button>
        </div>           
    )
}
jdsd

export default ItemCount
