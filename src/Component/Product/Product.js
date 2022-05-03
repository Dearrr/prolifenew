import React from "react";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import {
  ProductCard,
  ServiceIcon,
  ServiceH2,
  ServiceP,
  CardWrapper,
  Price,
  TitleContainer,
  LeftTitle,
  RightSlider,
  ButtonLeft,
} from "./ProductComponent";
import Data from "../../Data/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "./1.png";
import "../../asset/image/TWS100k.png";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Product = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Container className="GridProduct" id="product" data-aos="fade-right">
      <Grid container spacing={2}>
        <Grid item xs={12} className="title">
          <TitleContainer>Featured Product</TitleContainer>
        </Grid>
      </Grid>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          1: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {Data.product.map((products, index) => (
          <SwiperSlide key={products.id}>
            <ProductCard>
              <ServiceIcon
                key={products.id}
                src={products.img.default}
              ></ServiceIcon>

              <ServiceH2>{products.title}</ServiceH2>

              {/* <Price>{products.price}</Price> */}

              <Button variant="primary" onClick={handleShow}>
                See more
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    <li>การจัดเก็บน้ำดื่ม (ตามมาตรฐาน AS4020)</li>
                    <li>ซึมซับน้ำ</li>
                    <li>น้ำไฮเปอร์ซาลีน</li>
                    <li>น้ำเสียและน้ำเน่า</li>
                    <li>12 วัสดุที่แตกต่างกันขึ้นอยู่กับการใช้งาน</li>
                        <ul>
                            <li>XR-5®—เมมเบรนที่มีความแข็งแรงสูงและทนต่อสารเคมีมากที่สุดในตลาด พัฒนาขึ้นเพื่อป้องกันกรด น้ำมัน มีเทน และด่าง</li>
                            <li>XR-3®—สมบูรณ์แบบสำหรับการใช้งาน geomembrane ที่ต้องการความทนทานและความแข็งแรงของสารเคมีในระดับปานกลาง</li>
                            <li>XR®PW—สำหรับผลิตภัณฑ์สัมผัสน้ำดื่ม</li>
                        </ul>
                  </ul>
                </Modal.Body>
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
  );
};

export default Product;
