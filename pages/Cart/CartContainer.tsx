import { Trash } from 'phosphor-react';
import React from 'react'
import styled from 'styled-components';

type ProductList = {
    name?: string;
    img?: string;
    price?: number;
    size?: string;
    category: string;
    handleRemove: () => void;
} 

const CartProductListContainer = ({handleRemove, name, img, price, size, category}: ProductList) => {
  return (
    <CartList>
        <ImageAndName>
            <img src={img}/>
           <div>
           <h2> {name} </h2>
          {size !== "" ? <h2>Size - {size}</h2> : null}
           </div>
           
            
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
    border-radius: 10px;
    max-width: 150px;
    width: 20vw;
  height: auto;
  max-height: 200px;
  box-shadow: 7px 10px 15px rgba(0, 0, 0 ,0.5);
  :nth-child(n+){
        margin-top: 2rem;
       
    }
}  

h2{
    max-width: 50rem;
    margin: 0 0 0 1rem;
    font-weight: 300;
    font-size: 2rem;
    :nth-child(2){
        margin-top: 1rem;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 680px) {
    font-size: 1.1rem;
}


}
`

const Price = styled.div`
width: 80px;
font-weight: 300;
margin: 1rem;
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
box-shadow: 2px 2px 5px rgba(0, 0, 0 ,0.5);
`