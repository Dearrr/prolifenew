import React, { useState,useEffect } from 'react'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import './Categories.css'

import Data from '../../Data/Data';

import { CategoriesCard,LeftCategoriesCard,CategoriesIcon,ServiceH2,ServiceP, CardWrapper, Price,TitleContainer,LeftTitle,RightSlider,ButtonLeft } from './CategoriesComponent';

import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import ProductAll from '../Product/ProductAll';
import AOS from 'aos';
import 'aos/dist/aos.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Categories() {

    const [showProduct,setOpenProduct] = useState(false)
    const openProduct = () => setOpenProduct(true)

    useEffect(() => {
        AOS.init({duration:1500})
        
    }, [])

    return (
        <>
        <Container className="GridProduct" id="categories" data-aos="fade-left">
            <Grid container spacing={2} >
                <Grid item xs={12} className="title">
                    <TitleContainer>
                        <LeftTitle>
                            Categories
                        </LeftTitle>
                        
                    </TitleContainer>
                   
                </Grid>
                {Data.categories.map((categorie)=>(
                <Grid item xs={12} sm={6} md={4}>
                    
                        <CategoriesCard>
                            <LeftCategoriesCard>
                                <ServiceH2>{categorie.title}</ServiceH2>
                                <ServiceP onClick={openProduct}>Shop Now<br/>(คลิกได้)</ServiceP>
                            </LeftCategoriesCard>
                            <CategoriesIcon src={categorie.image}></CategoriesIcon>
                           
                    </CategoriesCard>
                </Grid>
            
                
                ))}
               
            </Grid>
          
            
      </Container>
     {showProduct ? <ProductAll/>:null}
     </>
    )
}


export default Categories

