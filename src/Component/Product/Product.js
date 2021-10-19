import React from 'react'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { ProductCard,ServiceIcon,ServiceH2,ServiceP, CardWrapper, Price,TitleContainer,LeftTitle,RightSlider,ButtonLeft } from './ProductComponent'
import Data from '../../Data/Data';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore,{ Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { useState } from 'react';
import { Button,Modal } from 'react-bootstrap';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Product = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Container className="GridProduct">
           <Grid container spacing={2} >
                <Grid item xs={12} className="title">
                    <TitleContainer>
                        
                    Featured Product
                        
                    </TitleContainer>
                   
                </Grid>
            </Grid> 
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                navigation
                
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            > 
                {Data.product.map((products)=>(
                <SwiperSlide key="{categorie.id}">
                      <ProductCard>
                            <ServiceIcon ></ServiceIcon>
                    
                            <ServiceH2>{products.title}</ServiceH2>
                        
                            <Price>{products.price}</Price>

                            <Button variant="primary" onClick={handleShow}>
                                See more
                            </Button>

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Product title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Description</Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                
                                </Modal.Footer> 
                            </Modal>
                      
                    </ProductCard>
                </SwiperSlide>
                    
                ))}
            </Swiper>
      </Container>
    )
}

export default Product
