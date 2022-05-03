import React, { useState,useEffect } from 'react'

import { BrowserRouter as Router} from 'react-router-dom'
import Header from '../Component/Header/Header';
import Banner from '../Component/Banner/Banner'
import Categories from '../Component/Categories/Categories';
import Footer from '../Component/Footer/Footer'
import Product from '../Component/Product/Product';
import Partner from '../Component/Partner/Partner'
import Container from '@mui/material/Container';
import Sidebar from '../Component/Header/SideBar/Sidebar';
import About from '../Component/AboutUs/About';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
    const [openProduct,setOpenProduct] = useState(false)
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    const open = () =>{
        setOpenProduct(!openProduct)
    }

    useEffect(() => {
        AOS.init({duration:2000})
        
    }, [])
    return (
        <>
        
        <Router>
            <body style={{backgroundColor:'#f0ffff'}}>{/* #e4faff */}{/* #f5f8fa */}
            <Header toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Banner />
            <About />
            <Product data-aos="fade-right"/>
             {/* <Categories />  */} 
            <Partner/>
            <Footer/>
            </body>
        </Router>
        
        </>
    )
}

export default Index
