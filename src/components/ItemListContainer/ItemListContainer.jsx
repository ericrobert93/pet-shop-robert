import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
  getAllItems as getProducts,
  getItemsByCategory,
} from "../../data/database";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid === undefined) {
      getProducts().then((res) => {
        setProducts(res);
      });
    } else {
      getItemsByCategory(categoryid).then((res) => {
        setProducts(res);
      });
    }
  }, [categoryid]);

  return (
    <section>
    <div className="list-item-container">
      <ItemList items={products} />
    </div>
    
    </section>
  );
}

export default ItemListContainer;
