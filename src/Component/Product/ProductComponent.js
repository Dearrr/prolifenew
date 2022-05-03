import styled from 'styled-components'

export const ServiceContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction:  column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width:768px){
        height: 1100px;
    }

    @media screen and (max-width:480px){
        height: 1300px;
    }
`

export const ServiceWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding: 0 50px;

    @media screen and (max-width:1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns: 1fr;
        padding:0 20px;
    }
`
export const TitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
export const ProductCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border:1px solid grey;
    border-radius: 5px;
    max-height: 340px;
    padding:30px;
    box-shadow: var(--main-shadow);
    transition: all 0.2 ease-in-out;

    &:hover{
        transition: scale(1.02);
        transition:  all 0.2s ease-in-out;
        border:1px solid var(--main-border-color);
        cursor:pointer;
    }
`

export const ServiceIcon = styled.img`
    height: 100%;
    width:100%;
    margin-bottom: 10px;
    transition: all 0.2 ease-in-out;
    &:hover{
        transition: scale(1.9);
        transition:  all 0.2s ease-in-out;
        
       
    }
`

export const ServiceH1 = styled.div`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom:64px;
    
`

export const ServiceH2 = styled.div`
    font-size: 1rem;
    margin-bottom:10px;
`

export const ServiceP = styled.div`
    font-size:1rem;
    text-align: center;
`
export const Price = styled.div`
    font-size:1rem;
    text-align: center;
`