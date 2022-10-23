import styled from "styled-components";

export const Nav = styled.nav`
position: sticky;
display: flex;
justify-content: space-between;
align-items: center;

height: 100px;

`

export const Menu = styled.div`
display: flex;
margin: 0 2rem;

`

export const SideMenuBars = styled.div`
margin-left: 2rem;
cursor: pointer;

@media screen and (min-width: 768px) {
    display: none;
}
`

export const DrawerMenu = styled.div`

font-size: 1.2rem;
color: #444444;


span:hover{
cursor: pointer;
text-decoration: underline;
}

span:first-child {
margin: 0 1rem 0 0;
}

@media screen and (max-width: 768px) {
display: none;
}
`


export const SubMenu = styled.div`
margin: 0 1rem;
font-size: 1.2rem;
cursor: pointer;
@media screen and (max-width: 670px) {
  margin: 0 0.5rem;
}
`;

export const Logo = styled.div`
font-size: 2.5rem;
color: #181818;
font-weight: 700;
cursor: pointer;
@media screen and (max-width:670px ) {
  font-size: 1.5rem;
}
@media screen and (max-width:500px ) {
  font-size: 0.9rem;
}
`

export const CartMenu = styled.div`

`

export const CartItensValue = styled.div`
height: 15px;
width: 15px;
border-radius: 50%;
background: #181818;
position: absolute;
top: 3rem;
right: 3rem;
display: flex;
justify-content: center;
font-size: 0.8rem;
color: #fff;
`