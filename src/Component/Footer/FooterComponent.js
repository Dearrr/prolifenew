import styled from 'styled-components'
import {Link} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color:#101522 ;
    
`

export const FooterWrap = styled.div`
    padding:  48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 8250px){
        padding-top: 32px;
    }

`
export const FooterLinkWrapper = styled.div`
    display: flex;
    
    @media screen and (max-width:820px){
        flex-direction: row;
    }
`

export const FooterContainer2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:32px;
`
export const LeftFooter = styled.div`
    
`
export const RightFooter = styled.div`
    
`

export const FooterTitle = styled.div`
    font-size: 1.6rem;
    color:#fff;
`
export const FooterDescription = styled.div`
    padding: 5px;
    font-size:1.1rem;
    color:#fff;
`
export const FooterLinkItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //align:  flex-start;
    margin:16px;
    text-align:  left;
    width:auto;
    box-sizing: border-box;
    color:#fff;
    cursor: pointer;

    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width:1000%;
    }

    &:hover{
       
        color: var(--main-color);
    }
`
export const FooterLinkIcon = styled.div`
    
`

export const FooterLinkDescripstion = styled.div`
    margin-left: 5px;
`
export const FooterLinkTitle = styled.h1`
    font-size:16px;
    margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-bottom : 0.5rem;
    font-size:14px;

    &:hover{
        color: var(--main-color);
        transition: 0.3s ease-out;
    }
`