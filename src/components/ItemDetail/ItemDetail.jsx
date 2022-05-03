import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail({ item }) {
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
                    <ItemCount initial={1} stock={5} onAdd={() => {}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail