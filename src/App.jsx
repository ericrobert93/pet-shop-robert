/* import logo from './logo.svg'; */
import './App.css';
import './components/NavBar/NavBar.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Cart from './components/Cart/Cart';
import {CartContextProvider} from "./context/CartContext"

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:categoryid' element={<ItemListContainer/>} />
          <Route path='/productos/:itemid' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </div>

  );
}

export default App;
