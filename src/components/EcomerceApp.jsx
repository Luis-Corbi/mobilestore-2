
import NavBar from "./NavBar";
import ItemCount from './Itemcount';

function EcomerceApp() {

    const onAdd =(count)=>{
        console.log(`la cantidad es : ${count}`)
    }
  return(
  <div className="App">
  <header className="App-header">
        
        <NavBar />
      </header>
  <ItemCount initial={1} stock={5} onAdd={onAdd} />
                  <p>hola soy app</p>
                  <ItemCount initial={1} stock={6} onAdd={onAdd} />
                  <p>hola soy app</p>
                  <ItemCount initial={1} stock={4} onAdd={onAdd} />
                  <p>hola soy app</p>
                  <ItemCount initial={1} stock={5} onAdd={onAdd} />
  </div>
  );
}

export default EcomerceApp;