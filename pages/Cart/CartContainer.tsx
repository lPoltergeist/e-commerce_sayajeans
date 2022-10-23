import { Trash } from 'phosphor-react';
import React from 'react'
import styled from 'styled-components';

type ProductList = {
    name: string;
    img: string;
    price: number;
    size: string;
    handleRemove: () => void;
} 

const CartProductListContainer = ({handleRemove, name, img, price, size}: ProductList) => {
  return (
    <CartList>
        <ImageAndName>
            <img src={img}/>
            <h2> {name} </h2>
            <span> {size} </span>
        </ImageAndName>
        <Price>
            <span>${price}</span>
            <ButtonRemove onClick={handleRemove}>
                Remove
            </ButtonRemove>
        </Price>
    </CartList>
  )
}

export default CartProductListContainer;

const CartList = styled.div`
margin: 2rem 0;
height: 200px;
display: flex;
align-items: center;
justify-content: space-between;

`;

const ImageAndName = styled.div`
margin: 2rem 0;
display: flex;
align-items: center; 

img{
    max-width: 150px;
    width: 20vw;
  height: auto;

 
}

h2{
    margin: 0 0 0 1rem;
    font-weight: 300;
    font-size: 3vw;
    @media screen and (max-width: 680px) {
    font-size: 1.1rem;
}
}
`

const Price = styled.div`
font-weight: 300;
margin-left: 1rem;
font-size: 1.5rem;
@media screen and (max-width: 680px) {
    font-size: 1.1rem;
}
`;

const ButtonRemove = styled.button`
border: 1px solid black;
width: 3.5rem;
border-radius: 5px;
background: transparent;
color: black;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
`