import React, { useEffect } from "react"
import styled, {keyframes, ThemeProvider } from "styled-components"
import {darkTheme} from "./Theme"
import { Github, PythonLogo } from '../components/AllSvgs';
import { NavLink } from 'react-router-dom';
import {motion} from 'framer-motion';
import {Work} from "../data/WorkData"

import SocialIcons from "../subComponents/SocialIcons"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"

//swiper
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'


const Container = styled(motion.div)`
background-color: ${props => props.theme.body};
height: 100vh;
display: flex;
align-items: center;
justify-content: space-evenly;
padding-left:5vw;

pagination{
    padding-top: 5vw;
}

`

const Card = styled(motion.div) `
width: 35vw;
height: 60vh;
background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
padding: 2vh 2.5vw;
margin-right: 8vw;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.body};
transition: all 0.2s ease;

&:hover{
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.text};
    border: 1px solid ${props => props.theme.text};
`

const Title = styled.h2`
font-size: calc(2.5vmax + 0.25em);
`

const Description = styled.h2`
font-size: calc(1.5vmax + 0.5em);
font-family: 'Karla', sans-serif;
font-weight: 500;
`

const Tags = styled.div`
border-top: 2px solid ${props => props.theme.body};
padding-top: 0.5vw;
display: flex;
flex-wrap: wrap;
${Card}: hover &{
    border-top: 2px solid ${props => props.theme.text};  
}
`

const Tag = styled.span `
margin-right: 1vw;
font-size: calc(1.5vmax + 0.25em);
`

const Footer = styled.footer `
display: flex;
justify-content: space-between;
`

const Link = styled.a `
background-color:${props => props.theme.body};
color: ${props => props.theme.text};
text-decoration: none;
padding: 1vw 3vw;
margin-bottom: 2.5vmax;
border-radius: 0 0 0 50px;
font-size: calc(1.5vmax + 0.75em);

${Card}: hover &{
    background-color:${props => props.theme.text};
    color:${props => props.theme.body};
}
` 
const Git = styled.a `
color: inherit;
text-decoration: none;

${Card}: hover &{
    &>*{
        fill: ${props => props.theme.text};
    }
}
`
const rotate = keyframes`
from{
    transform:rotate(0);
}
to{
    transform:rotate(360deg);
}
`
const Rotate = styled.span `
display: block;
position: fixed;
right: 2vw;
bottom: 2vh;
width: 80px;
height: 80px;
z-index: 1;
animation: ${rotate} infinite 1.5s linear;
`
const WORK = styled.h1 `
font-family: 'Karla', sans-serif;
font-size: calc(12vmax + 1.5em);
color:${props => props.theme.text};
position: fixed;
left: 0;
top: 30%;
transform: rotate(75deg) translate(-5%, 60%);
padding: 2vh 2.5vw;
margin-right: 2vw;
display:flex;
z-index: 0;
opacity:0.1;
`
//framer-motion
const container = {
    hidden: {opacity: 0},
    show:{
        opacity: 1,
        transition:{
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const card = {
    hidden: {scale: 0},
    show:{
        scale: 1,
        transition:{
            type: 'spring',
            duration: 0.5,
        }
    }
}

const Projects = () =>{
    const Redirect = (url) => {
        window.location.replace(url);
    }
    return(
    <ThemeProvider theme={darkTheme}>
        <Container variants={container} initial='hidden' animate='show'>
            
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />

        <Rotate><PythonLogo width={80} height={80} fill={darkTheme.text} /></Rotate>

        <WORK>WORK</WORK>
        <Swiper
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={50}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">

            {
                Work.map(item => {
                    return (
                        <SwiperSlide>
                        <Card key={item.id} variants={card} initial='hidden' animate='show'>
                        <Title>{item.name}</Title>
                    <Description>{item.description}</Description>
                    <Tags>
                        {
                            item.tags.map((t, id) => {
                                return <Tag key={id}>#{t}</Tag>
                            })
                        }
                    </Tags>
                    <Footer>
                        <Link href= '#' onClick ={() => Redirect(`${item.github}`)} target="_blank" rel="noreferrer" >
                            Check
                        </Link>
                        <Git href= '#' onClick ={() => Redirect(`${item.github}`)} target="_blank" rel="noreferrer" >
                            <Github width={"5vmax"} height={"5vmax"}/>
                        </Git>
                    </Footer>
                    </Card>
                    </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </Container>
    </ThemeProvider>
    )
}

export default Projects