import React from 'react';
import './ItemCart.css';
import useCartContext from '../../context/CartContext';



function ItemCart({ item }) {
    const {removeItem} = useCartContext();
    console.log('item', item);
    return (
        <>
        <div className='card1'>
        <div className='header'>{ item?.title }</div>
        <div className='content1'>
            <div className='img-container'>
                <img className='product-img' src={ item?.imageURL } alt="Imagen del producto" />
            </div>
        </div>
        <div>Cantidad total: {item?.cant}</div>
        <div className='footer1'>Precio total: ${item?.priceTotal}</div>
        <button onClick={()=>removeItem(item.id)}>Eliminar articulo</button>
    </div>
    
    </>
    );
    
}

export default ItemCart;