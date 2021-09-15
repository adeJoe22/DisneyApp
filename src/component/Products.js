import React from 'react'
import styled from "styled-components"
import images1 from "./images/viewers-disney.png"
import images2 from "./images/viewers-pixar.png"
import images3 from "./images/viewers-marvel.png"
import images4 from "./images/viewers-starwars.png"
import images5 from "./images/viewers-national.png"
import disneyVid from "./videos/disney.mp4"
import disneyVid2 from "./videos/pixar.mp4"
import disneyVid3 from "./videos/marvel.mp4"
import disneyVid4 from "./videos/star-wars.mp4"
import disneyVid5 from "./videos/national-geographic.mp4"

const Products = () => {
    return (
            <Container>
                <Wrapper>
                    <img src={images1}/>
                    <video
                        src={disneyVid}
                        type="video/mp4"
                        autoPlay= {true}
                        loop
                        muted
                        playsInline
                    />
                </Wrapper>
                <Wrapper>
                    <img src={images2}/>
                    <video
                        src={disneyVid2}
                        type="video/mp4"
                        autoPlay= {true}
                        loop
                        muted
                        playsInline
                    />
                </Wrapper>
                <Wrapper>
                    <img src={images3}/>
                    <video
                        src={disneyVid3}
                        type="video/mp4"
                        autoPlay= {true}
                        loop
                        muted
                        playsInline
                    />
                </Wrapper>
                <Wrapper>
                    <img src={images4}/>
                    <video
                        src={disneyVid4}
                        type="video/mp4"
                        autoPlay= {true}
                        loop
                        muted
                        playsInline
                    />
                </Wrapper>
                <Wrapper>
                    <img src={images5}/>
                    <video
                        src={disneyVid5}
                        type="video/mp4"
                        autoPlay= {true}
                        loop
                        muted
                        playsInline
                    />
                </Wrapper>
            </Container>
    )
}

export default Products

const Container = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    grid-gap: 20px;
    padding: 20px;
`
const Wrapper = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 5px;
    border: 2px solid gray;
    color: black;
    transition: all 350ms;
    transform: scale(1);
    position: relative;

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
        border-radius: 5px;
        z-index: 100;
    }

    video{
        position: absolute;
        left: 0;
        z-index: -100;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 350ms;
        opacity: 0;
        border-radius: 3px;
    }

    :hover{
        cursor: pointer;
        border: 4px solid white;
        transform: scale(1.03);
        box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
                    rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    

        video{
            opacity: 1;
        }
    }


`