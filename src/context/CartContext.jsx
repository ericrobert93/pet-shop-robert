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
                    copyItem.priceTotal = cartItem.price * copyItem.cant;
                    copyItem.priceTotal.toFixed(2);
                   return copyItem;
                }else{
                    return cartItem;
                }
            });
            setCart(newCart);
        }else{
            let priceTotal = item.price * cant;
            priceTotal.toFixed(2);
            const newItem = {...item, cant, priceTotal};
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
        const cartIs = cart.some (item =>{
            return item.id === id;
        });
        return cartIs;
    }
    const cantTotalcart = () =>{
        let total = 0;
        cart.forEach (item =>{
            total += item.cant;
        });
        return total;
    }
    const cantPriceCart = () =>{
        let total = 0;
        cart.forEach (item =>{
            total += (item.cant * item.price);
        });
        return total;
    }
    return(
        <Provider value={{ cart, addToCart, removeItem, clearCart, isInCart,cantTotalcart,cantPriceCart}}>
            {children}
        </Provider>
    )
}

export default useCartContext;