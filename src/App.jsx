/* import logo from './logo.svg'; */
import './App.css';
import './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryid' element={<ItemListContainer/>} />
          <Route path='/productos/:itemid' element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
