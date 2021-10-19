import React from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import {FooterContainer,FooterWrap,FooterLinkContainer,FooterLinkWrapper,FooterLinkItem,FooterLinkTitle,FooterLink,LeftFooter,RightFooter,FooterContainer2} from './FooterComponent'
import './Footer.css'
const Footer = () => {
    return (
        <>
    
        <Grid Container className="ContainerFooter">
            <Grid item >
                <FooterContainer2>
                <LeftFooter>
                    <FooterLinkItem>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                            <FooterLink to='/'>227/361 ตึกคันทรี่คอมเพล็กซ์อาคาร C ถนน สรรพาวุธ บางนา กรุงเทพฯ 10260</FooterLink>
                            <FooterLink to='/'>062-469-4563, 088-258-4365</FooterLink>
                            <FooterLink to='/'>prolife.new@gmail.com</FooterLink>
                    </FooterLinkItem>
                    </LeftFooter>
                    <RightFooter>
                    <FooterLinkItem>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to='/'>Facebook</FooterLink>
                            <FooterLink to='/'>Line</FooterLink>
                            
                    </FooterLinkItem>
                </RightFooter>
                </FooterContainer2>

               
            </Grid>
               
            
        </Grid>
    
    </>
    )
}

export default Footer
