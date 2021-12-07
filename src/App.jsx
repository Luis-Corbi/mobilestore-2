import './App.css';
import EcomerceApp from './components/EcomerceApp';
import 'materialize-css/dist/css/materialize.min.css';
import ComponenteConteiner from './components/ItemListContainer';
import Titulo from './components/Titulo';
import Form from './components/Form';
import Boton from './components/Boton';
 
function App() {
  return (
    <div className="App">
    <EcomerceApp />
    <Titulo />
    <Form />
    <Boton />
    <ComponenteConteiner />
    </div>
  );
}

export default App;
