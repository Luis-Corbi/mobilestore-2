import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import getproducts from "./Items"
import ItemList from './ItemList'



function ItemListContainer( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams() 
    
    
    useEffect(() => {
        if (idCate) {
            getproducts
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate))) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))            
        } else {
            getproducts
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))               
        }
    }, [idCate])  
    
    console.log(idCate)
    // [] => retorna otro array [<li>1</li>,....]
    
    return (
        <div>
            { greeting }
            { loading ? 
                <h2>Cargando...</h2> 
                :  
               <ItemList productos={productos} />
            }
            
        </div>
    )
}

export default ItemListContainer
