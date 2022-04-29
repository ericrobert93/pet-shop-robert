import React from 'react';
import img from '../images/cart.png';
import './CartWidget.css'
function CartWidget(props) {
    return (
        <div>
            <img className='imgCart' src={img} alt="" />
        </div>
    );
}

export default CartWidget;