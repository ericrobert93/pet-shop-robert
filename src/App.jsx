/* import logo from './logo.svg'; */
import './App.css';
import './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
/* import ItemListContainer from './components/ItemListContainer/ItemListContainer'; */

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemDetailContainer/>
      {/* <ItemListContainer/> */}

    </div>

  );
}

export default App;
