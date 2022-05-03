import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import img1 from '../images/pretal.png';

function getItem() {
    const myPromise = new Promise((resolve, reject) => {
        const item = {
            id:1,
            title: 'Pretal',
            description: 'Pretal de doble agarre, para que tu perro no se escape!',
            price: '$1999',
            imageURL: img1
        };
        setTimeout(() => {
            resolve(item);
        }, 2000);
    });
    return myPromise;
}

function ItemDetailContainer() {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getItem()
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, []);

    return (
        <div className='item-detail'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer