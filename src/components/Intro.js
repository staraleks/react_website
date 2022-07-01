import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import Me from '../assets/Images/intro_image.png'
import {IntroImg} from "./AllSvgs"

const Box = styled(motion.div)`
position: absolute;
left:50%;
top:50%;
transform:translate(-50%,-50%);

width: 60vw;
height: 65vh;
display: flex;
justify-content: space-between;

background-repeat: no-repeat;
background-size: 100% 10px;
border-left: 2px solid ${props => props.theme.body};
border-right: 2px solid ${props => props.theme.body};

z-index:1;

transition: width 1s ease;
`

const SubBox = styled.div`
width:50%;
height: 100%;
position: relative;
display: flex;
background-color:${props => props.theme.text};
border:2px solid ${props => props.theme.body};


.pic{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform:translate(-55%,0);
    width: 100%;
    height: 80%;
    
}
`
const SubBoxText = styled.div`
font-size: 4vh;
color: ${props => props.theme.body};
padding-left: 1.5vh;
margin-bottom: 3vw;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*: last-child{
    color:${props => 'rgba(${props.theme.bodyRgba, 0.6})'}
    font-size: calc(0.5rem + 1.5vh);
    font-weight: 300;
} 
`

const Intro = (props) => {
  return (
    <Box
    initial={{height:0}}
    animate={{height: '65vh'}}
    transition={{type: 'spring', duration:2, delay:1}}
    >
        <SubBox >
            <SubBoxText>
                <h1>Hi,</h1>
                <h3>I am Star Alex</h3>
                <h6>A full stack newbie who has some experience in developing applications on Python and game development</h6>
            </SubBoxText>
        </SubBox>
        <SubBox>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:1, delay:1.5}}
            >
                <img className='pic' src={Me} alt = 'Profile Image ' />
            </motion.div>
        </SubBox>
    </Box>
  )
}

export default Intro