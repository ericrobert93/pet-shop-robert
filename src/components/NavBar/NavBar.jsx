import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
function NavBar(props) {
    return (
    <>
      <div className="containerNavBar titulares">
        <h1 className="">Pet Shop Bruno</h1>
        
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link bg-light itemNav" href="# top">
              PRODUCTOS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-light itemNav" href="# top">
              ¿DUDAS?
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-light itemNav" href="# top">
              GUÍA DE COMPRA
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-light itemNav" href="# top">
              CONTACTO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link bg-light itemNav" href="# top">
              GUÍA DE TALLES
            </a>
          </li>
        </ul>
        <CartWidget/>
      </div>
      
      </> 
    );
}

export default NavBar;