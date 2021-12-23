import {Link} from 'react-router-dom';
import React from "react";

function Item(prod) {
    return (
        <div 
            key={prod.id}
            className='card'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-content">
                   <span className="card-title activator grey-text text-darken-4"> {`${prod.name} - ${prod.categoria}`}</span>
                </div>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={prod.foto} alt='imagen del producto' />
                    {prod.price}                                                            
                </div>
                <div className="card-footer">  
                <Link to={`/ItemList/${prod.id}`}>
                </Link>                                                      

                </div>
            </div>
        </div>
    )
}
 fsjfj   
export default Item
    