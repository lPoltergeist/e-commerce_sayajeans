import styled from "styled-components";

export const FooterContainer = styled.div`
margin-top: 3rem;
height: 500px;
background: #181818;
`

export const FooterMenuContainer = styled.div`
display: flex;
margin: 2rem 5rem;
width: 60%;
height: 350px;
padding-top: 3rem;
justify-content: space-between;
@media screen and (max-width:670px ) {
  margin: 0;
}

:nth-child(n+2){
  margin-left: 3rem;
} 

@media screen and (min-width: 600) {
  display: grid;
}
`

export const MenuContainer = styled.nav`
margin: 1rem 0;
color: #fff;

h3{
  font-weight: 400;
  font-size: 1.1rem;
}

li{
  list-style: none;
  margin: 1rem 0;
  font-weight: 300;
  font-size: 0.9rem;
  color: #d6d6d6;
  cursor: pointer;

  :hover{
    color: #fff;
    text-decoration: underline;
  }
}

`

export const RegionSelect = styled.div`
margin: 4rem;
height: 80px;
`

export const RegionContainer = styled.div`
margin: 2rem 0 0 3rem;
color: #fff;
font-weight: 300;
`