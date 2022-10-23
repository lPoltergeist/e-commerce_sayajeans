import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { CartContext } from '../../components/Context/CartContext'
import { ProductContext } from '../../components/Context/ProductsContext'
import ProductContainer from '../../components/ProductContainer/ProductContainer'
import CartProductListContainer from './CartContainer'

const Cart = () => {
  const {total, cart, handleRemoveItemFromCart} = useContext(CartContext)
  const {Products} = useContext(ProductContext)

  return (
    
    <CartContainer>

       {cart.length === 0 ? <EmptyCart>
          <div>
          <h3>Your cart is empty</h3>
         
         <Link href="/">
         <span>Continue shopping</span>
         </Link>
          </div>
  
        </EmptyCart> : 
        <>
        <CartBox>
          <CartBoxHeader>
          <h3>Your cart</h3>
          <Link href="/">
         <span>Continue shopping</span>
         </Link>
          </CartBoxHeader>
          <CartListHeaderContainer>
          <div className="box1">
          <span>PRODUCT</span>
          <span>PRICE</span>
          </div>
          </CartListHeaderContainer>

          <ProductList>

         <CartContainer/>

         </ProductList>
         
          </CartBox>
        
          {cart.map(({image, price, title, size}: any, index: number) => (
            <>
          <CartProductListContainer img={image} name={title} price={price} size={size} 
          key={index} handleRemove={() =>(handleRemoveItemFromCart(index))} />
          
          </>
       ))}
       <CheckOut>
          <div className="Subtotal">
          <span>SubTotal</span>
          <span> ${total} </span>
          <div >
        <CheckOutButton>Check out</CheckOutButton>
        </div>
          </div>
          
          </CheckOut>
          
       </>
       }

    </CartContainer>
)

}

export default Cart

const CartContainer = styled.div`
margin: 0 5rem; 
@media screen and (max-width: 680px) {
    margin: 0 1rem;
}
`

const EmptyCart = styled.div`
width: 100vw;
display: flex;
justify-content: center;
margin: 10rem 0 15rem 0;

h3{
  font-weight: 700;
  font-size: 2rem;
}

span {
  margin: 3rem 0 0 4rem;
text-decoration: underline;
cursor: pointer
}
`

const CartBox = styled.div`

`
  
const CartBoxHeader = styled.div`

display: flex;
justify-content: space-between;
align-items: center;


h3 {
  font-size: 2.5rem;
  font-weight: 400;
}
span{
  text-decoration: underline;
  font-weight: 300;
  font-size: 1.1rem;
  cursor: pointer;
}
`

const CartListHeaderContainer = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid gray;

span{
  font-size: 0.8rem;
  justify-content: space-between;
  
}

.box1{
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}

.box2{
  span:nth-child(1) {
    margin: 0 20vw 0 8rem;

  }
}
` 

const ProductList = styled.div`

`

const ProductInformation = styled.div`
width: 48rem;
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: space-between;

div{
img{
  height: 5rem;

}
 h4 {
  margin-left: 2rem;
  font-weight: 300;
  font-size: 1.2rem;
 }
  display: flex;
  align-items: center;
}

span{
 margin-right: 2rem;
cursor: pointer;
}
`
const CheckOut = styled.div`
margin-top: 2rem;
width: 100%;
display: flex;
justify-content: flex-end;
.Subtotal{
display: block;

button{
  background-color: #181818;
  margin-top: 1rem;
height: 40px;
width: 200px;
border-radius: 5px;
border: none;
font-size: 1.2rem;
cursor: pointer;
transition: ease-out 0.2s;

:hover {
 background-color: #f8f8f8;
 border: 1px solid black;
 color: black;
}
}

 span{
      font-weight: 300;
      font-size: 1rem;

      :nth-child(2){
        margin:0  0 1rem 2rem;
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
}

.checkout{
display: flex;
justify-content: flex-end;
}
`

const AlsoLiketitle = styled.div`
margin: 1rem 10rem;
`
  
const AlsoLike = styled.div`
margin: 0 5rem;
height: 100vw;

display: grid;
grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
gap: 3rem;
justify-content: center;
`

const ViewMore = styled.div`
    margin: 3rem 0;
    display: flex;
    justify-content: center;
    `

    const CheckOutButton = styled.button`
    background: #181818;
      border: none;
      border-radius: 5px;
      height: 40px;
      width: 120px;
      font-size: 1.2rem;
      font-weight: 300;
      transition: ease-in-out 0.2s;

      :hover{
        scale: 1.1;
        background: white;
        color: black;
        border: 1px solid black;
      }
    `
