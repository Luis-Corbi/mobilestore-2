import {useParams} from 'react-router-dom'

function ItemDetailContainer() {
    const {id} = useParams()
    // useEffect necesito un if acá?
    console.log(id)//string     prod.id===id number === parseInt(string)
    return (
        <div>
            Item Detail Container
        </div>
    )
}

export default ItemDetailContainer