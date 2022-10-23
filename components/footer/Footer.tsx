import React from 'react'
import {FooterContainer, FooterMenuContainer, MenuContainer, RegionContainer, RegionSelect} from './FooterStyle'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterMenuContainer>
        <MenuContainer>
        <ul>
          <h3>Customer Care</h3>
          <li>
          Shipping & Returns
          </li>
          <li>
            Contact Us
          </li>
          <li>
            FAQ'S
          </li>
          <li>
            Size Guide
          </li>
          <li>
            Retailers
          </li>
          <li>
            Whalesale
          </li>
          <li>
            AfterPlay
          </li>
          <li>
            Legal & Privacy
          </li>
        </ul>
        </MenuContainer>

        <MenuContainer>
        <ul>
          <h3>Our World</h3>
          <li>
          About Us
          </li>
          <li>
            Ethics & Sustainability
          </li>
          <li>
            Giving Back
          </li>
        </ul>
        </MenuContainer>

        <MenuContainer>
        <ul>
          <h3>Follow Us</h3>
          <li>
          Instagram
          </li>
          <li>
            Facebook
          </li>
          <li>
            Newsletter
          </li>
        </ul>
        </MenuContainer>

      </FooterMenuContainer>
      <RegionSelect>
    <RegionContainer>
    © SAYAJEANS 2022
    </RegionContainer>
      </RegionSelect>
        
    </FooterContainer>
  )
}

export default Footer;

