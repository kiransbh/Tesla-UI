import React, { useEffect } from 'react'
import styled from 'styled-components'
import LeftLogo from './LeftLogo'
import SpeedIcon from '@material-ui/icons/Speed'
import  { motion, useAnimation } from 'framer-motion' 
import  { useInView } from 'react-intersection-observer'


function First() {

    const{ref, inView} = useInView({
        thershold:1
    });
    const animation = useAnimation();
    useEffect(()=>{
        if(!inView){
            animation.start({
                y:0,
                opacity:0,
                transition:{
                    duration:1
                }
            })
        }
        if(inView){
            animation.start({
                y:-30,
                opacity:1
            })
        }
    },[inView,animation])

  return (
        <Container ref={ref}>
            <LeftLogo />
            <motion.h1
                animate={animation}
            >Model 3</motion.h1>
            < Bg>
                <img className='bg' src={'/Images/Model-3/1.jpg'} alt='model3' />
            </Bg>
            <Wrapper>
                <Speed>
                    <motion.h2
                    animate={animation}
                    ><SpeedIcon style={{fontSize:'1.3em'}} />3.1 s</motion.h2>
                    <motion.p
                    animate={animation}
                    >0-60 mph*</motion.p>
                </Speed>
                <Range>
                    <motion.h2
                    animate={animation}
                    >358 mi</motion.h2>
                    <motion.p
                    animate={animation}
                    >Range(EPA est.)</motion.p>
                </Range>
                <Motor>
                    <motion.h2
                    animate={animation}
                    >AWD</motion.h2>
                    <motion.p
                    animate={animation}
                    >Dual Motor</motion.p>
                </Motor>
                <Cta><motion.button
                     animate={animation}
                >ORDER NOW</motion.button></Cta>
            </Wrapper>
        </Container>
  )

}

export default First

const Container = styled.div`
    position:relative;
    width:100vw;
    height:100vh;

    h1{
        font-size:2.2em;
        position:absolute;
        top:18%;
        left:46%;
        transform:translate(-50%,-50%);

        @media (max-width:767px){
            font-size:1.8em;
            left:42%;
        }
    }
`
const Bg = styled.div`
    img{
        width:100vw;
        height:100vh;
        object-fit:cover;
    }
`
const Wrapper = styled.div`
    width:36%;
    position:absolute;
    display:flex;
    justify-content:space-between;
    align-items:center;
    bottom:54px;
    left:32%;

    @media (max-width:767px){
        width:75%;
        left:15%;

        h2{
            font-size:1.2em;
        }
    
        p{
            font-size:0.7em;
        }
    }

    h2{
        font-size:1.8em;
    }

    p{
        font-size:1em;
    }
`

const Speed = styled.div`
    h2{
        display:flex;
        justify-content:center;
        align-items:center;
    }

    p{
        @media (max-width:767px){
            margin-top:-10%;
        }
    }
`
const Range = styled.div`
    text-align:center;
    @media (max-width:767px){
        display:none;
    }
`
const Motor = styled.div`
    text-align:center;
    @media (max-width:767px){
        display:none
    }
`
const Cta = styled.div`
    button{
        width:160px;
        height:36px;
        outline:none;
        border:none;
        background:transparent;
        border:1.8px solid black;
        border-radius:20px;
        cursor:pointer;
        font-weight:bold;
    }
`