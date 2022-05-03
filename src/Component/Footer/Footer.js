import React from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import {FooterContainer,FooterWrap,FooterLinkContainer,FooterLinkWrapper,FooterLinkItem,FooterLinkTitle,FooterLink,LeftFooter,RightFooter,FooterContainer2,FooterTitle,FooterDescription,FooterLinkIcon,FooterLinkDescripstion} from './FooterComponent'
import './Footer.css'

import { FaFacebookF,FaPhoneAlt,FaLine } from "react-icons/fa";
const Footer = () => {
    return (
        <>
    <FooterContainer id="footer">
        <FooterWrap>
            <FooterTitle>ProLifeNew</FooterTitle>
            <FooterDescription>Address: Lorem ipsum dolor sit amet consectetur adipisicing elit.</FooterDescription>
            
            <FooterLinkWrapper>
                <FooterLinkItem>
                    <FooterLinkIcon>
                        <FaPhoneAlt/>
                    </FooterLinkIcon>
                  
                   <FooterLinkDescripstion>
                       082-XXXXXXX
                   </FooterLinkDescripstion>
                </FooterLinkItem>
                <FooterLinkItem>
                    
                        <FaFacebookF/>
                    
                    
                    <FooterLinkDescripstion>
                       Facebook
                   </FooterLinkDescripstion>
                </FooterLinkItem>
                <FooterLinkItem>
                    <FooterLinkIcon>
                        <FaLine/>
                    </FooterLinkIcon>
                   
                    <FooterLinkDescripstion>
                       Line
                   </FooterLinkDescripstion>
                </FooterLinkItem>
            </FooterLinkWrapper>
        </FooterWrap>
    </FooterContainer>
    
    </>
    )
}

export default Footer
