import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
function Item({ item }) {
  return (
    <div className='card'>
        <div className='header'>{ item?.title }</div>
        <div className='content'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imageURL } alt="Imagen del producto" />
            </div>
        <div className='footer'>{ item?.description }</div>
        </div>
        <div className='footer'>{ item?.price }</div>
        <Link to={`/productos/${item.id}`}>
        <button>Ver mas</button>
        </Link>
    </div>
  )
}

export default Item