import React from 'react';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer(props) {
    return (
        <div>
            <h2>Caja contenedora</h2>
            <ItemCount/>
        </div>
    );
}

export default ItemListContainer;