import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const {Provider} = CartContext;

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) =>{
        if (isInCart(item.id)) {
            const newCart = cart.map(cartItem =>{
                if (cartItem.id === item.id) {
                    const copyItem = {...cartItem}
                    copyItem.cant += cant;
                   return copyItem;
                }else{
                    return cartItem;
                }
            });
            setCart(newCart);
        }else{
            const newItem = {...item, cant};
            setCart([...cart, newItem]);
        }
    }
    const removeItem = (id) =>{
        const newCart = [...cart];
        const cartFilter = newCart.filter (item =>{
            return item.id !== id;
        });
        setCart(cartFilter);
    }

    const clearCart = () =>{
        setCart([]);
    }

    const isInCart = (id) =>{
        const newCart = [...cart];
        const cartIs = newCart.some (item =>{
            return item.id === id;
        });
        console.log('Existe en el array? ',cartIs);
        return cartIs;
    }

    const contextFunction = () => console.log('Ya esta listo el contexto');
    return(
        <Provider value={{contextFunction, cart, addToCart, removeItem, clearCart, isInCart}}>
            {children}
        </Provider>
    )
}

export default useCartContext;