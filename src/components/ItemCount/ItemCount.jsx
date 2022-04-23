import React, { useState } from 'react';
import './ItemCount.css'
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function ItemCount(props) {
    /* const [count, setCount] = useState(0); */
    const [count, setCount] = useState(0);
    return (
        /* <button onClick={() => setCount(count + 1)}>
            Clickeado { count } veces
        </button> */
        <>
        <div className='contenedor'>
        <div className='contenedorInterno'>
          
          <ButtonGroup className='contenedorBotones'>
            <Button className='botones'
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              {" "}
              <RemoveIcon fontSize="small" />
            </Button>
            <Badge className='carrito' color="secondary" badgeContent={count} >
            <ShoppingCartIcon/>{" "}
          </Badge>
            <Button className='botones'
              onClick={() => {
                setCount(Math.min(count + 1, 5));
              }}
            >
              {" "}
              <AddIcon fontSize="small" />
            </Button>

          </ButtonGroup>
          
        </div>
        <button className='botonAgregar'>Agregar al carrito</button>
      </div>
      </>
    );
}

export default ItemCount;