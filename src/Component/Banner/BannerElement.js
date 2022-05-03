import styled,{keyframes} from 'styled-components'

export const BannerContainer = styled.div`
    background: #0c0c0c;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index:1;
    `
export const BannerBg = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const VideoBg = styled.video`
    width:100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: #232a34;
`
export const BannerContent = styled.div`
    z-index:3;
    max-width: 1200px;
    position:absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const animate = keyframes`
    0%{opacity: 0;
    transform: translate3d(0,100%,0)}
    100%{opacity: 1;
    transform: none;}
`

export const BannerTitle = styled.div`
    color: var( --main-font-color);
    font-size: 48px;
    text-align: center;
    animation: ${animate} 2s 0s ;
 
    
    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`


export const BannerDesciption = styled.div`
    margin-top: 24px;
    color: var( --main-font-color);
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    animation: ${animate} 2s 0s ;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`