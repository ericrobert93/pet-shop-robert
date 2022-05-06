import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';
import productsList from '../../data/productos';

function getItem(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productFound = productsList.find((product) => {
                return Number(id) === product.id;
            });
            resolve(productFound);
        }, 300);
    });
}

function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const {itemid} = useParams();
    useEffect(() => {
        getItem(itemid)
            .then(res => {
                setItem(res);
            })
            .catch(err => {
                console.log(err);
                alert('Ocurrio un error, revisar la consola!');
            });
    }, [itemid]);

    return (
        <div className='item-detail'>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer