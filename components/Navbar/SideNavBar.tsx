import { List, X } from 'phosphor-react'
import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ProductContext } from '../Context/ProductsContext';

const SideNavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const {handleSetAll, handleSetElectronics, handleSetJewelery} = useContext(ProductContext)

  const [size, setSize] = useState<any>({
    width: undefined,
    height: undefined,
});

useEffect(() => {
  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  if (size.width > 768 && open) {
    setOpen(false);
  }
}, [size.width, open]);


  return (
    <SideBarContainer>
    <div className="dotsIcon" onClick={() => handleOpen()}>
    {open ? <X size={25} color="#4a4a4a" /> : <List size={25} color="#4a4a4a" />}
    </div>

    {open && <MenuContainer >
    <ul>
      <h4>Shop</h4>
      <li onClick={() => {handleSetAll(), setOpen(false)}}>
      All
      </li>
      <li onClick={() => {handleSetJewelery(), setOpen(false)}}>
      Jewelery
      </li>
      <li onClick={() => {handleSetElectronics(), setOpen(false)}}>
      Electronics
      </li>
    </ul>

    <ul>
      <h4>Our World</h4>
      <li>
      About Us
      </li>
      <li>
      Giving Back
      </li>
      <li>
      Contact Us
      </li>
    </ul>

    </MenuContainer>}
      </SideBarContainer>
  )
}

export default SideNavBar

const SideBarContainer = styled.div`
height: 100vh;
position: absolute;


.dotsIcon{
  cursor: pointer;
  position: absolute;
  bottom: 40rem;
  @media screen and (min-width: 768px) {
    display: none;
  }
}

`
  
const MenuContainer = styled.div`

height: 50vh;
border-radius: 0 5px 5px 0;
position: absolute;
top: 1rem;
left: -2rem;
width: 200px;
background: #eaeaea;
box-shadow: 10px 10px 25px rgba(0, 0, 0 ,0.5);

ul {
  list-style: none;
  margin: 2rem 0;

  li {
    margin: 1rem 0 0 1rem;
    :hover{
      cursor: pointer;
    }

    :after {
  content: '';
  width: 0px;
  height: 2px;
  display: block;
  background: #181818;
  transition: 300ms;
}
:hover:after {
  width: 60%;
}
  }
}
`
