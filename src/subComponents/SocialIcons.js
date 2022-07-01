import React from "react"
import { NavLink } from "react-router-dom"
import { Github, LinkedIn, Facebook, Telegram } from "../components/AllSvgs"
import styled from "styled-components"
import {darkTheme} from '../components/Theme'
import { motion } from 'framer-motion'

const Icons = styled(motion.div)`
display:flex;
flex-direction: column;
align-items:center;

position:fixed;
bottom:0;
left:calc(0.25em + 0.5vmin);
z-index:10;

&>*: not(:last-child){
    margin:7% 0%;
}
`

const Line = styled(motion.span)`
width:2px;
height:3vh;
background-color:${props => props.color === 'dark' ? darkTheme.text : darkTheme.body };
`

const SocialLink = styled(NavLink) `
color: inherit;
`

const SocialIcons = (props) =>{
    return (
        <Icons >
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1}}
            >
                <SocialLink color={props.theme} target="_blank" to={{pathname:"https://github.com/Negaflaneur"}}>
                    <Github width={'6vw'} height={'5vh'} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body} />
                </SocialLink>
            </motion.div>
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.2}}
            >
                <SocialLink color={props.theme} target="_blank" to={{pathname:"https://t.me/Negaflaneur"}}>
                    <Telegram width={'6vw'} height={'5vh'} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </SocialLink>
            </motion.div>
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.4}}
            >
                <SocialLink color={props.theme} target="_blank" to={{pathname:"https://www.facebook.com/profile.php?id=100080368590470"}}>
                    <Facebook width={'6vw'} height={'5vh'} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </SocialLink>
            </motion.div>
            <motion.div 
            initial={{transform:"scale(0)"}}
            animate={{scale:[0,1,1.5,1]}}
            transition={{type:'spring', duration:1, delay:1.6}}
            >
                <SocialLink color={props.theme} target="_blank" to={{pathname:"https://www.linkedin.com/in/alex-star"}}>
                    <LinkedIn width={'6vw'} height={'5vh'} fill={props.theme === 'dark' ? darkTheme.text : darkTheme.body}/>
                </SocialLink>
            </motion.div>

            <Line color={props.theme} 
            initial ={{
                height:0
            }}
            animate={{
                height: '3vh'
            }}
            transition={{
                type:'spring', duration:1, delay:0.9
            }}
            />
        </Icons>
    )
}

export default SocialIcons