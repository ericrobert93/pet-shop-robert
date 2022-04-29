import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';
import img1 from '../images/perro.jpg';
import img2 from '../images/gato.jpg';
import img3 from '../images/aves.jpg';
import img4 from '../images/alimentoPerro.jpg';
import img5 from '../images/alimentoGato.jpg';
import img6 from '../images/alimentoAves.jpg';

function getProducts() {
    const myPromise = new Promise((resolve, reject) => {
      const productsList = [
        {
            id:1,
            title: 'Perros',
            description: 'Los mejores productos para tu perro.',
            price: '$1999',
            imageURL: img1
        },
        {
            id:2,
            title: 'Gatos',
            description: 'Los mejores productos para tu gato.',
            price: '$1498',
            imageURL: img2
        },
        {
            id:3,
            title: 'Aves',
            description: 'Los mejores productos para tu ave.',
            price: '$997.99',
            imageURL: img3
        },
        {
            id:4,
            title: 'Alimentos-Perros',
            description: 'Alimentos de todas las marcas para tu perrito.',
            price: '$1099',
            imageURL: img4
        },
        {
            id:5,
            title: 'Alimentos-Gatos',
            description: 'Alimentos de todas las marcas para tu gatito.',
            price: '$859.99',
            imageURL: img5
        },
        {
            id:6,
            title: 'Alimentos-Aves',
            description: 'Alimentos de todas las marcas para tu ave.',
            price: '$219.99',
            imageURL: img6
        }
      ];
      setTimeout(() => {
        resolve(productsList);
      }, 2000);
    });
    return myPromise;
  }
  
  function ItemListContainer({ greeting }) {
  
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      getProducts()
        .then(res => {
          setProducts(res);
        })
    }, []);
  
    return (
      <div className='list-item-container'>
        <ItemList items={products} />
      </div>
    )
  }
  
  export default ItemListContainer