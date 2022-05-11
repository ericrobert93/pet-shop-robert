import {React, useState} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

function ItemDetail({ item }) {
    const [Number, setNumber] = useState(false);
    function onAdd(count) {
        console.log('Agregaste al carritoooo ', count);
        setNumber(true);
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
                <p>{ item?.price }</p>
                <div className='description'>{ item?.description }</div>
                <div className='count'>
                    {Number? 
                    <Link to={`/cart/`}><button>Ver mas</button></Link> 
                    : 
                    <ItemCount initial={1} stock={item?.stock} onAdd={onAdd} />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail