import React from 'react'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import './Categories.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Data from '../../Data/Data';
import Box from '@mui/material/Box';
import { CategoriesCard,LeftCategoriesCard,ServiceIcon,ServiceH2,ServiceP, CardWrapper, Price,TitleContainer,LeftTitle,RightSlider,ButtonLeft } from './CategoriesComponent';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function Categories() {
    return (
        <Container className="GridProduct">
            <Grid container spacing={2} >
                <Grid item xs={12} className="title">
                    <TitleContainer>
                        <LeftTitle>
                            Categories
                        </LeftTitle>
                        
                    </TitleContainer>
                   
                </Grid>
                {Data.categories.map((categorie)=>(
                <Grid item xs={4} >
                    
                        <CategoriesCard>
                            <LeftCategoriesCard>
                                <ServiceH2>{categorie.title}</ServiceH2>
                                <ServiceP>Shop Now</ServiceP>
                            </LeftCategoriesCard>
                            <ServiceIcon src={categorie.image}></ServiceIcon>
                           
                    </CategoriesCard>
                </Grid>
            
                
                ))}
               
            </Grid>
        
            
      </Container>
    )
}


export default Categories

