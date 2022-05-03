import styled,{keyframes} from 'styled-components'

export const AboutWrapper = styled.div`
    display: flex;
    flex-direction:row;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction:column;
    }

`
export const animate = keyframes`
    0%{opacity: 0;
    transform: translate3d(100%,0,0)}
    100%{opacity: 1;
    transform: none;}
`

export const animate2 = keyframes`
    0%{opacity: 0;
    transform: translate3d(-100%,0,0)}
    100%{opacity: 1;
    transform: none;}
`
export const VideoWrapper = styled.div`
    padding-top: 20px;
    
`

export const AboutVideo = styled.img`
    width: 100%;
    height:100% ;
    border: red solid 1px;
    //animation: ${animate2} 2s 0s ;
`

export const AboutContentWrapper = styled.div`
    padding-top: 20px;
    padding-left: 20px;

    @media screen and (max-width: 899px){
        padding-left: 0px;
    }

    @media screen and (max-width: 768px){
        padding-left: 0px;
    }
`


export const TitleAbout = styled.div`
    font-size: 24px;
    font-weight: 600;
    animation: ${animate} 2s 0s ;

     
    @media screen and (max-width: 768px){
        font-size: 22px;
    }

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const DescriptionAbout = styled.div`
    font-size :18px;
    //animation: ${animate} 2s 0s ;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }

    @media screen and (max-width: 480px){
        font-size: 14px;
    }
`