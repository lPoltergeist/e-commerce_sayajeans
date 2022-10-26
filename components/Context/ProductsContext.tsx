import Link from 'next/link'
import { createContext, useEffect, useState } from "react";

type ProductContext = {
  Products: any[];
  handleSetAll: () => void;
  handleSetJewelery: () => void;
  handleSetElectronics: () => void;
}

export const ProductContext = createContext<ProductContext>({} as ProductContext);


export const ProductProvider = ({children}: any) => {
  const [category, setCategory] = useState('products')
  function handleSetAll() {
    setCategory('products')
  }

  function handleSetJewelery() {
    setCategory('products/category/jewelery')
    
  }

  function handleSetElectronics() {
    
    setCategory('products/category/electronics')
    
  }

    const [Products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
      }, [category])
  

    return <ProductContext.Provider value={{handleSetElectronics, handleSetAll, handleSetJewelery, Products }}> {children} </ProductContext.Provider>
};