import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

import { AuthContext } from "./AuthContext";

type CartContext = {
    handleRemoveItemFromCart: any;
    handleAddToCart: any;
    CleanCart: any
    cart: any;
    total: number;
}

export const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider = ({children}: any) => {
    const {Loged} = useContext(AuthContext)

    const [cart, setCart] = useState<any>([]);
    const total = cart.reduce((acc: any, current: any) =>Math.trunc(acc + current.price), 0)

    function handleAddToCart(title: string, description: string, price: number, image: string, size: string, index: number) {
      if (Loged) {
        const itemObject = {title: title, description: description, price: price, image: image, size: size, index: index};
      setCart([...cart, itemObject]);
      } else {
        toast.error('You need loged in to add a product', {
          style: {
            background: '#181818',
            color: '#fff'
          }
        })
      }
     
    }
  
    function handleRemoveItemFromCart(ClickedItem:number) {
      const filtered = cart.filter((cartItem: number) => cart.indexOf(cartItem) !== ClickedItem);
      setCart(filtered);
      
    }

    function CleanCart() {
      setCart([]);
    }

    return <CartContext.Provider value={{CleanCart, total, cart, handleAddToCart, handleRemoveItemFromCart}}> {children} </CartContext.Provider>
}


