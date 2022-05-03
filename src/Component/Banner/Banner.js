import React from 'react'
import Video from '../../asset/video/video.mp4'
import {BannerContainer,BannerBg,VideoBg,BannerContent,BannerTitle,BannerDesciption} from './BannerElement'

const Banner = () => {
    return (
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </BannerBg>
            <BannerContent>
                <BannerTitle>Prolife Company</BannerTitle>
                <BannerDesciption>Welcome To Our Website</BannerDesciption>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner
