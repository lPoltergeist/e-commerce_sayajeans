import { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import Stripe from 'stripe';
import stripeConfig from '../../config/stripeConfig';
import styled from 'styled-components';
import { CartContext } from '../../components/Context/CartContext';


const Products = () => {
  const {handleAddToCart, cart} = useContext(CartContext);
  console.log(cart);

  const router = useRouter();
  const id = router.asPath.substring(10, 20);
  const [singleProduct, setsingleProduct] = useState([{}] as any);
    
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then( res => res.json())
    .then((data) => setsingleProduct([data]))
    console.log(singleProduct)
    }, [id])


  return (
    <ProductPage>
      <ProductContainer>
  {singleProduct.map(({image, title, price, description}:any, index: any) => (
    <>
      <ProductImage>
        <img src={image}/>
      </ProductImage>
      <ProductInformation>
       <Title>
       {title}
       </Title>
       <Price>
      {price}
       </Price>
       <Size>
         <span>SIZE</span>
         <input type="text" list="size" />
<datalist id="size">
  <option>P</option>
  <option>M</option>
  <option>G</option>
  <option>GG</option>
</datalist>
       </Size>
       <Button onClick={() => handleAddToCart(title, description, price, image, index)}>add to cart</Button>     
       <Description>
         {description}
       </Description>
      </ProductInformation>
      </>
   ))}
     
      </ProductContainer>
    </ProductPage>
    
  )
}

export default Products;

const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2022-08-01'
  })
  
  return {
    paths: [],
    fallback: false,
  }
}

const ProductPage = styled.div`
margin: 2rem 2rem;

min-height: 500px;
`

const ProductContainer = styled.div`
display: flex;
justify-content: center;
height: 100%;
@media screen and (max-width:670px ) {
  display: block;
}
`

const ProductImage = styled.div`
margin-right: 5rem;
@media screen and (max-width:670px ) {
  margin: 0 auto;
}
img{
  height: 400px;
  width: 100%;
}


`

const ProductInformation = styled.div`
margin-top: 3rem;

`

const Title = styled.div`
margin-bottom: 2rem; 
font-size: 1.4rem;
font-weight: 300;`

const Price = styled.div`
margin-bottom: 1.5rem; 
font-size: 1.3rem;
font-weight: 300;
`

const Size = styled.div`
input{
background: transparent;
border: none;
max-width: 500px;
}

input[type=text] {
  height: 30px;
  width: 100%;
  color: #181818;
  padding: 14px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

`

const Button = styled.button`
width: 100%;
max-width: 500px;
height: 40px;

font-size: 1.4rem;
border-radius: 5px;
background: #181818;
border: none;
transition: ease-in-out 0.2s;
cursor: pointer;

:hover{
  background-color: transparent;
  color: #181818;
  border: 1px solid #181818;
}
`

const Description = styled.div`
margin: 2rem 0;
max-width: 400px;
font-weight: 300;

@media screen and (max-width:670px ) {
  max-width: 100%;
}

`