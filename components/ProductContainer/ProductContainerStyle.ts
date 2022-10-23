import styled from "styled-components";

export const Container = styled.section`
border-radius: 5px;
background-color: #fff;
box-shadow: 0 2px 20px rgba(0,0,0,0.4);
max-width: 20rem;
min-width: 17rem;
margin-top: 5rem;

img{
    border-radius: 5px 5px 0 0;
    margin: 0.5rem 0 0 0.2rem;;
  
    object-fit: contain;
    max-height: 250px;
    
}`
    

export const ProductInformation = styled.div`
display: inline;
margin: 0.3rem;

`
    
export const Title = styled.h3`
margin: 0.5rem 0 0 0.5rem;
font-size: 1rem;
`
    
export const Description = styled.div`
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 15rem;
  font-size: 1rem;
  margin: 0.5rem 0 0 0.5rem;;
`

export const Price = styled.div`
margin: 1rem 0 0 0.7rem;
span{
    font-size: 0.9rem;
    margin: 0.5rem 0 0 0.2rem;;
}` 

export const Button = styled.button`

margin: 1rem 0 0.5rem 0.5rem;
border-radius: 5px;
border: 1px solid black;
height: 1.5rem;
width: max-content;
background: transparent;
color: black;
font-weight: 400;
font-size: 0.9rem;
transition: ease-in-out 0.2s;

:hover{
 background: #181818;
 color: #fff;
 border: 1px solid #fff;
}
`
