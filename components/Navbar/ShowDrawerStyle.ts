import styled from "styled-components";

export const Nav = styled.nav`
border-radius: 2px;
box-shadow: 5px 15px 15px rgba(0, 0, 0 ,0.5);
height: 150px;
width: 150px;
position: absolute;
background-color: #eaeaea;


`

export const ShopNav = styled.nav`
border-radius: 2px;
box-shadow: 10px 15px 15px rgba(0, 0, 0 ,0.5);
height: 140px;
width: 150px;
position: absolute;
background-color: #eaeaea;
`

export const SideNav = styled.div`
margin: 1.5rem;`

export const Menu = styled.div`
color: black;

cursor: pointer;


:after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: #444444;
  transition: 300ms;
}
:hover:after {
  width: 100%
}

:nth-child(n+2) {
  margin: 1rem 0 0 0;
}

`