import React from 'react'
import {Menu, Nav, ShopNav, SideNav} from './ShowDrawerStyle'

export const ShopDrawerMenu = () => {


  return (
    <ShopNav>
        <SideNav>
        <Menu>
            All
        </Menu>
        <Menu>
            Tops
        </Menu>
        <Menu>
            Bottoms
        </Menu>
        <Menu>
            Jewelery
        </Menu>
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





