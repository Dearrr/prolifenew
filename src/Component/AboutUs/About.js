import { useEffect } from 'react'
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { AboutContentWrapper,AboutWrapper, AboutVideo, TitleAbout, VideoWrapper, WrapperVideo, DescriptionAbout } from './AboutComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../../asset/image/Logo.jpg'

const About = () => {
    useEffect(() => {
        AOS.init({duration:1500,})
        
    }, [])
    return (
       <Container id="about">
           <Grid container>
               <Grid item xs={12} md={6}> 
                <VideoWrapper>
                    {/* <AboutVideo data-aos="fade-right"> */}
                    <img src={Logo} data-aos="fade-right"></img>
                    {/* </AboutVideo> */}
                   
                </VideoWrapper>
            
                </Grid>
                <Grid item xs={12} md={6}>
                <AboutContentWrapper data-aos="fade-up">
                    <TitleAbout>
                        About Us
                    </TitleAbout>
                    <DescriptionAbout>
                    บริษัท โปรไลฟ์ จำกัด ก่อตั้งเมื่อ 2548 โดยบริษัทมีแนวคิดในการดำเนินธุรกิจเกี่ยวกับการบริหารจัดการน้ำ เก็บกักน้ำ ระบบผลิตประปา 
                    ระบบบำบัดน้ำเสีย รวมถึงนวัตกรรมการกำจัดตะกรันหินปูนในน้ำ นอกจากนี้ทางบริษัทยังเล็งเห็นความสำคัญเรื่องการจัดการขยะและการประหยัดพลังงาน 
                    </DescriptionAbout>
                    <br/>
                    <DescriptionAbout>
                    ทางบริษัทนำผลิตภัณฑ์ที่มีประสบการณ์มายาวนานและเป็นนวัตกรรมระดับโลก 
                    เพื่อตอบโจทย์ทุกโครงการ 
                    </DescriptionAbout>
                    
                </AboutContentWrapper>
                </Grid>
            
           </Grid>
           
       </Container>
    )
}

export default About
