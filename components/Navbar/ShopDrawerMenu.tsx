import Link from 'next/link';
import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductsContext';
import {Menu, Nav, ShopNav, SideNav} from './ShowDrawerStyle'

export const ShopDrawerMenu = () => {
    const {handleSetAll, handleSetJewelery, handleSetElectronics} = useContext(ProductContext)

  return (
    

    <ShopNav>
        <SideNav>
       <Link href="/">
       <Menu onClick={() => handleSetAll()}>
            All
        </Menu>
       </Link>
       
       <Link href="/">
        <Menu onClick={() => handleSetJewelery()}>
            Jewelery
        </Menu>
        </Link>

        <Link href="/">
        <Menu onClick={() => handleSetElectronics()}>
            Electronics
        </Menu>
        </Link>

        </SideNav>
    </ShopNav>
  )
};

export const OurWorldDrawerMenu = () => {
  return (
    <Nav>
        <SideNav>
        <Menu>
            About Us
        </Menu>
        <Menu>
            Giving Back
        </Menu>
        <Menu>
            Contact Us
        </Menu>
        </SideNav>
    </Nav>
  )
}





