import React, { useState } from 'react'

import { BrowserRouter as Router} from 'react-router-dom'
import Header from '../Component/Header/Header';
import Banner from '../Component/Banner/Banner'
import Categories from '../Component/Categories/Categories';
import Footer from '../Component/Footer/Footer'
import Product from '../Component/Product/Product';
import Partner from '../Component/Partner/Partner'
import Container from '@mui/material/Container';
import Sidebar from '../Component/Header/SideBar/Sidebar';

const Index = () => {
    const [isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
    return (
        <>
        
        <Router>
            <Header toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Banner />
            <Product to='/product' component={Product}/>
            <Categories/>
            <Partner/>
            <Footer/>
        </Router>
        
        </>
    )
}

export default Index
