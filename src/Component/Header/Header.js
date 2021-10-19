import React from 'react'
import {FaBars} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';

import './Header.css';
import { Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks} from './HeaderElement';

const Header = ({toggle}) => {
  const toggleHome = () =>{
    scroll.scrollToTop();
  }
    return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>
          MyWebsite
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars/>
        </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about"
                smooth={true} 
                duration={500} 
                spy={true}
                exact="true" 
                offset={-80}
                activeClass='active'
              >
                About us
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="product"
                smooth={true} 
                duration={500} 
                spy={true}
                exact="true" 
                offset={-80}
                activeClass='active'
              >
                Product
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="categories"
                to="product"
                smooth={true} duration={500} spy={true}
                exact="true" offset={-80}
                activeClass='active'
              >
                Categories
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about"
                smooth={true} 
                duration={500} 
                spy={true}
                exact="true" 
                offset={-80}
                activeClass='active'
              >
                Contact Us
                </NavLinks>
            </NavItem>
          </NavMenu>
        
      </NavbarContainer>
    </Nav>

  
    )
}

export default Header
