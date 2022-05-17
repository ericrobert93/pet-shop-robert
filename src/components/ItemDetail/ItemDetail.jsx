import {React, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';

function ItemDetail({ item }) {
    const [Numero, setNumero] = useState(false);
    const {addToCart} = useCartContext();
    function onAdd(count) {
        setNumero(true);
        addToCart(item,count);
        console.log('Ya agregue al cart', item);
    }

    if (!item) {
        return <h4>Cargando ...</h4>
    }

    return (
        <div className='item-detail'>
            <div className='parteIzquierda'>
                <div className='img-detail'>
                    <img src={ item?.imageURL } alt='Imagen del producto' />
                </div>
            </div>
            <div className='parteDerecha'>
                <div className='info'>
                    <h2>{ item?.title }</h2>
                    <p>${ item?.price }</p>
                    <div className='description'>{ item?.description }</div>
                    <div className='count'>
                        {Numero? 
                        <Link to={`/cart/`}><button>Ir al carrito</button></Link> 
                        : 
                        <ItemCount initial={1} stock={item?.stock} onAdd={onAdd} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail