import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import {useParams} from 'react-router-dom';
import {getItemsById as getItem} from '../../data/database';

function ItemDetailContainer() {
    
    const [item, setItem] = useState();
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