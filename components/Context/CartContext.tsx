import { createContext, useState } from "react";
import Cart from "../../pages/Cart";

type CartContext = {

    handleRemoveItemFromCart: any;
    handleAddToCart: any;
    CleanCart: any
    cart: any;
    total: number;

}

export const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider = ({children}: any) => {

    const [cart, setCart] = useState<any>([]);
    const total = cart.reduce((acc: any, current: any) => acc + current.price, 0)
  

    function handleAddToCart(title: string, description: string, price: number, image: string, size: string, index: number) {
      const itemObject = {title: title, description: description, price: price, image: image, size: size, index: index};
      setCart([...cart, itemObject])
    }
  
    function handleRemoveItemFromCart(ClickedItem:number) {
      const filtered = cart.filter((cartItem: number) => cart.indexOf(cartItem) !== ClickedItem);
      setCart(filtered)
    }

    function CleanCart() {
      setCart([]);
    }

    return <CartContext.Provider value={{CleanCart, total, cart, handleAddToCart, handleRemoveItemFromCart}}> {children} </CartContext.Provider>
}