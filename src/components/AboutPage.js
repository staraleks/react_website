import React from "react"
import styled, { keyframes, ThemeProvider } from "styled-components"
import {darkTheme} from "./Theme"
import itachi from '../assets/Images/itachi.jpg'
import {motion} from 'framer-motion'

import SocialIcons from "../subComponents/SocialIcons"
import LogoComponent from "../subComponents/LogoComponent"
import PowerButton from "../subComponents/PowerButton"

const Box = styled(motion.div)`
background-color: ${props => props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
overflow:hidden;
`
const floating = keyframes`
0% {transform:translateY(-10px) }
50% {transform:translateY(15px) translateX(15px)}
100% {transform:translateY(-10px)}
`

const Astonaut = styled.div`
position:absolute;
top: 20%;
right: 5%;
width: 20vw;
animation: ${floating} 4s ease infinite;
display:block;


img{
    width: 100%;
    height: 70vh;
}
`
const Main = styled(motion.div)`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
width: 60vw;
height: 75vh;
z-index: 3;
line-height: 1.5;

font-family: 'Ubuntu Mono', monospace;
font-size: calc(1vmax + 0.5em);
font-style: italic;
padding-left: 1.5vh;
margin-bottom: 0;
backdrop-filter: blur(4px);

display: flex;
flex-direction: column;
justify-content: space-evenly;
position: absolute;
left: 10%;
top: 17%;
`
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

const main = {
    hidden: {scale: 0},
    show:{
        scale: 1,
        transition:{
            type: 'spring',
            duration: 1,
        }
    }
}

const AboutPage = () =>{

    return(
    <ThemeProvider theme={darkTheme}>
        <Box variants={container} initial='hidden' animate='show'>
        <LogoComponent theme='dark'/>
        <SocialIcons theme='dark'/>
        <PowerButton />
        <Astonaut>
            <img src={itachi} alt="itachi"/>
        </Astonaut>

        <Main variants={main} initial='hidden' animate='show'>
        <p>I'm a full stack newbie with some experience in Python, C#, JavaScript, HTML and CSS. A fast learner and a self-starter.</p>
        <p>I'm interested in data structures, algorithms, game development, new tech, hackathons, coding challenges and all things related to software. Looking for applied sources of knowledge</p>
        <p>I have worked on several projects. Currently contributing to the development of a b2b telegram bot. Check out my project page to learn more and connect with me!</p>
        </Main>

        </Box>
    </ThemeProvider>
    )
}

export default AboutPage