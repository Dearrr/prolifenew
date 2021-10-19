import styled from 'styled-components'

export const TitleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
export const LeftTitle = styled.div`
    
`

export const RightSlider = styled.div`
    text-align: end;
    
`

export const ButtonLeft = styled.button`
    border: 1px solid #fff;
    border-radius: 75%;
    transition: all 0.2 ease-in-out;
    

    &:hover{
        background-color:#4fb68d;
        color:white
       
    }
`
export const CategoriesCard = styled.div`
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border:1px solid grey;
    border-radius: 5px;
    max-height: 340px;
    padding:30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.4);
    transition: all 0.2 ease-in-out;

    &:hover{
        transition: scale(1.02);
        transition:  all 0.2s ease-in-out;
        border:1px solid #01bf71;
        
        cursor:pointer;
    }

    
`

export const LeftCategoriesCard = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const CardWrapper = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`
export const ServiceIcon = styled.img`
    height: 50%;
    width:50%;
    margin-bottom: 10px;
    transition: all 0.2 ease-in-out;

    &:hover{
        transition: scale(1.02);
        transition:  all 0.2s ease-in-out;
        //transform: scale(1.5)
        
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
    font-weight: 600;
`

export const ServiceP = styled.div`
    font-size:1rem;
    text-align: center;
    transition: all 0.2 ease-in-out;
    
    &:hover{
        transition: scale(1.02);
        transition:  all 0.2s ease-in-out;
        color:#01bf71;
        transform: scale(1.1);
        cursor:pointer;
    }
`

