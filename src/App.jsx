import './App.css';
import EcomerceApp from './components/EcomerceApp';
import 'materialize-css/dist/css/materialize.min.css';
import ComponenteConteiner from './components/ItemListContainer';
import Titulo from './components/Titulo';
import ItemListContainer from './components/ItemListContainer';
 
function App() {
  return (
    <div className="App">
    <EcomerceApp />
    <Titulo />
    <ComponenteConteiner />
    <ItemListContainer />
    </div>
  );
}

export default App;
