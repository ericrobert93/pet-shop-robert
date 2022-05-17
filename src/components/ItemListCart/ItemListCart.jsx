import React from 'react';
import './ItemListCart.css';
import ItemCart from '../ItemCart/ItemCart';

function ItemListCart({ items }) {
    return (
        <div className='item-list'>
            {items.map(item => <ItemCart item={item} key={item.id} />)}
        </div>
    );
}

export default ItemListCart;