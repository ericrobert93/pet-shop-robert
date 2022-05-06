import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
function NavBar(props) {
    return (
    <>
      <div className="containerNavBar titulares">
        <h1 className="">Pet Shop Bruno</h1>
        
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link className="nav-link bg-light itemNav" to="/category/Perros">
              PERROS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link bg-light itemNav" to="/category/Gatos">
              GATOS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link bg-light itemNav" to="/category/Aves">
              AVES
            </Link>
          </li>
        </ul>
        <CartWidget/>
      </div>
      
      </> 
    );
}

export default NavBar;