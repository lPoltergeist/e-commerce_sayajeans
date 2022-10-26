import type { NextPage } from 'next'
import Head from 'next/head'
import {useContext} from 'react';
import { Container} from '../styles/IndexStyle'
import ProductContainer from '../components/ProductContainer/ProductContainer';

import { CartContext } from '../components/Context/CartContext';
import { ProductContext } from '../components/Context/ProductsContext';
import Link from 'next/link';


type ProductItems = {
  id: number;
  title: string
  price: number
  description: string
  image: string
  category: string;
}


const Home: NextPage = () => {
 
 const {handleAddToCart} = useContext(CartContext)
 const {Products} = useContext(ProductContext)

  return (
    <div>
      <Head>
        <title>Sayajeans | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Container>
        
        {Products.map(({id,  image, description, price, title, category}: ProductItems, index) => (
        
        
          <Link key={index} href={`/products/${id}`}>
          <a>
        <ProductContainer  img={image} description={description} 
         price={price} title={title} key={index}  category={category}
         handleAddToCart={() => handleAddToCart({image, title, description, price, category})}/>
         </a>
        </Link>

        ))}
        </Container>

    </div>
  )
}

export default Home;

