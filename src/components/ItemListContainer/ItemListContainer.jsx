import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import productsList from '../../data/productos';
import ItemList from '../ItemList/ItemList';
import {useParams} from 'react-router-dom';

function getProducts(categoryid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(categoryid){
          let arrayProducts = productsList.filter ((product)=>{
            return product.category === categoryid;
          });
          resolve (arrayProducts);
        }else{
          resolve(productsList);
        }
      }, 300);
    });
  }
  
  function ItemListContainer({ greeting }) {
  
    const [products, setProducts] = useState([]);
    const {categoryid} = useParams();
    console.log('ID: ', categoryid);
    useEffect(() => {
      getProducts(categoryid)
        .then(res => {
          setProducts(res);
        })
    }, [categoryid]);
  
    return (
      <div className='list-item-container'>
        <ItemList items={products} />
      </div>
    )
  }
  
  export default ItemListContainer