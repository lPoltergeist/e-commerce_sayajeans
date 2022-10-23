import { createContext, useEffect, useState } from "react";

type ProductContext = {

  Products: any[];
}

export const ProductContext = createContext<ProductContext>({} as ProductContext);

export const ProductProvider = ({children}: any) => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
      }, [])
  

    return <ProductContext.Provider value={{ Products }}> {children} </ProductContext.Provider>
};