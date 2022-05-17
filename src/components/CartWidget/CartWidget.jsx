import React from 'react';
import img from '../images/cart.png';
import './CartWidget.css'
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
function CartWidget(props) {
    const {cantTotalcart,cantPriceCart} = useCartContext();
    return (
        <Link to="/cart" className='nav-link marca'>
        <div>
            
            <img className='imgCart' src={img} alt="" />
            <h5 className='textoWidget'>Cantidad: {cantTotalcart()}</h5>
            <h5 className='textoWidget'>Precio: ${cantPriceCart()}</h5>
        </div>
        </Link>
    );
}

export default CartWidget;