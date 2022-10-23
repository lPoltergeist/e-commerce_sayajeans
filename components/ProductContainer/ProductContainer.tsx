
import React from 'react'
import {Container, Description, Price, ProductInformation, Title} from './ProductContainerStyle'

interface ProductProps {

    img: string;
    title: string;
    description: string;
    price: number;
    handleAddToCart?: () => void;
   
  }

const ProductContainer: React.FC<ProductProps> = ({img, title, description, price, handleAddToCart}: ProductProps) => {
  return (
    <Container>
        <ProductInformation>
        <img src={img} width='240px' height='300px'/>
            <Title>
            {title.length > 30 ? title.substring(0,25) + '...'  : title}
            </Title>
            <Description>
               <span> {description} </span>
            </Description>

            <Price>
                <span>${price}</span>
            </Price>
        </ProductInformation>
      
    </Container>
  )
}

export default ProductContainer;

