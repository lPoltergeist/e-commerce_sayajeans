import styled from "styled-components";

export const Container = styled.div`

height: 100%;
@media screen and (max-width: 680px) {
    margin: 0 1rem;
}

display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 16rem));
    gap: 3rem;
    justify-content: center;
`

export const Box = styled.div`
  

    img{
   height: 100%
   
    }
`;

export const CategoryContainer = styled.div`
display: flex; 
margin: 0 auto;

`

export const Category = styled.div`
display: flex; 
margin: 2rem auto;
font-size: 4rem;
color: #181818;
font-weight: 300;
`

export const Button = styled.button`
margin: 1rem 0 0.5rem 0.5rem;
border-radius: 5px;
border: 1px solid black;
height: 1.5rem;
width: 18rem;
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
