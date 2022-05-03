import { useEffect } from 'react'
import {PartnerWrapper,PartnerIcon} from './PartnerComponent'
import Data from '../../Data/Data'
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Partner() {
  useEffect(() => {
    AOS.init({duration:1500})
    
}, [])
    return (
       <Container data-aos="fade-up">
            <PartnerWrapper>
            <Swiper
                
                breakpoints={{
                    // when window width is >= 640px
                    1: {
                     
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    640: {
                      
                      slidesPerView: 3,
                    },
                    1024:{
                        slidesPerView: 5,
                        
                    }
                  }}
                spaceBetween={20}
                slidesPerView={3}
                
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            > 
                {Data.partner.map((element)=>
                <SwiperSlide key="{element.id}">
                       <PartnerIcon src={element.img}/>
                </SwiperSlide>
                    
                )}
            </Swiper>
            
         </PartnerWrapper>
       </Container>
    )
}

export default Partner
