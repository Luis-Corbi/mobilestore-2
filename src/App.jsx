import './App.css';
import NavBar from './components/NavBar';
import 'materialize-css/dist/css/materialize.min.css';
import ComponenteConteiner from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <NavBar />
      </header>
    </div>
  );
}

ComponenteConteiner()
export default App;
