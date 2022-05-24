import React from 'react';
import './CartView.css';
import useCartContext from '../../context/CartContext';
import ItemListCart from '../ItemListCart/ItemListCart';
import img from '../images/cart.png';
import { Link } from 'react-router-dom';
import {createBuyOrder} from '../../data/database';
    
function CartView() {
    const {cart,cantTotalcart, cantPriceCart,clearCart,removeFromCart} = useCartContext();
    function handleBuy(){
        const itemsToBuy = cart.map((item) => ({
            title: item.title,
            cant: item.cant,
            price: item.price,
            id: item.id
            }
        ))
        const buyOrder = {
            buyer:{
                name: "Eric",
                phone: "123456789",
                email: "eric@gmail.com"
            },
            items:itemsToBuy,
            total: cantPriceCart()
        }
        createBuyOrder(buyOrder);
    }
    if (cart.length === 0) {
        return <>
            <div className='divCarrito'>
                    <div className='cardView'>
                        <div className='header'>CARRITO</div>
                            <div className='content1'>
                                <div className='img-container'>
                                    <img className='product-img' src={ img } alt="Imagen del producto" />
                                </div>
                            </div>
                            <div>No hay articulos en el carrito</div>
                            <Link to={`/`}><button>Volver al catálogo</button></Link> 
                    </div>
                </div>
        </>
    }else{
        return <div lassName='list-item-container'>
        <ItemListCart items={cart} />
                <div className='divCarrito'>
                    <div className='cardView'>
                        <div className='header'>CARRITO</div>
                            <div className='content1'>
                                <div className='img-container'>
                                    <img className='product-img' src={ img } alt="Imagen del producto" />
                                </div>
                            </div>
                            <div>Cantidad total de articulos: {cantTotalcart()}</div>
                            <div className='footer1'>Precio total a abonar: ${cantPriceCart()}</div>
                            <button onClick={()=>clearCart()}>Vaciar Carrito</button>
                            <button onClick={handleBuy}>¡Comprar!</button>
                    </div>
                </div>
        </div>

    }
}

export default CartView;