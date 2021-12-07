import {useState} from 'react'

 


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
            <button className="btn btn-primary" onClick={handlerAdd}>+</button>
            <label>{count}</label>
            <button className="btn btn-primary" onClick={handlerRm}>-</button><br />
            <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>
        </div>           
    )
}


export default ItemCount
