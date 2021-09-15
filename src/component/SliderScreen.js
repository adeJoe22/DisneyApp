import React from 'react';
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Sliderimg1 from "./images/slider-badag.jpg";
import Sliderimg2 from "./images/slider-badging.jpg";
import Sliderimg3 from "./images/slider-scale.jpg";
import Sliderimg4 from "./images/slider-scales.jpg";

const SliderScreen = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }; 

    return (
        <Container>
            <Wrapper>                           
                    <MySlider {...settings}>
                        <MyStyled>
                            <SliderImage src={Sliderimg1}/>
                        </MyStyled>
                        <MyStyled>
                            <SliderImage src={Sliderimg2}/>
                        </MyStyled>
                        <MyStyled>
                            <SliderImage src={Sliderimg3}/>
                        </MyStyled>
                        <MyStyled>
                            <SliderImage src={Sliderimg4}/>
                        </MyStyled>
                    </MySlider>                
            </Wrapper>
        </Container>
    )
}

export default SliderScreen

const Container = styled.div`
    width: 100%;
    height: 400px;
`
const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
`

const MyStyled = styled.div`
    width: 100%;
    height: 300px;
    border-radius: 10px;
    color: black;
    background-color: white;
    transition: all 350ms;

    :hover{
        border: 2px solid ;
        box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
                    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    }
`

const SliderImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    border: solid 2px white;
    z-index: -1;
   
`
const MySlider = styled(Slider)`

    .slick-list{
        overflow: visible;
    }
`