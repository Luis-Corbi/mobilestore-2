
import NavBar from "./NavBar";
import ItemCount from './Itemcount';
import Titulo from "./Titulo";
import Item from "./ItemDetail";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import Cart from "./Cart";
import CartContextProvider, { useCartContext } from "./cartcontext/CartContext";


function EcomerceApp() {

  return(
    <div>
  <center className="App-header">
        
        <NavBar />
        <Titulo />
      </center>
      <center>
        <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />
      </center>
      <CartContextProvider>
      <BrowserRouter>
      <center>
        <Routes>
                    <Route 
                        exact
                        path="/" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                    />
                    <Route 
                        exact
                        path="/categoria/:idCate" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                    />                  
                    <Route 
                        exact
                        path="/detalle/:id" 
                        element={ <ItemDetailContainer />} 
                    />                  
                    <Route 
                        exact
                        path="/cart" 
                        element={ <Cart />} 
                    />   
                   
                    
                </Routes>
      </center>
      </BrowserRouter>
      </CartContextProvider>
  </div>
);
}

export default EcomerceApp;