import React,{ useEffect } from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import  { motion, useAnimation } from 'framer-motion' 
import  { useInView } from 'react-intersection-observer'

function Second() {

    const{ref, inView} = useInView({
        thershold:1
    });
    const animation = useAnimation();
    useEffect(()=>{
        if(!inView){
            animation.start({
                x:0,
                opacity:0,
                transition:{
                    duration:1
                }
            })
        }
        if(inView){
            animation.start({
                x:-50,
                opacity:1,
                transition:{
                    delay:1
                }
            })
        }
    },[inView, animation])

  return (
    <Wrapper>
        <Bg>
            <img className='bg' src={'/Images/Model-3/4.jpg'} alt='model3' />
        </Bg>
        <SideContainer ref={ref}>
            <motion.h1
             animate={animation}
            >Built for Safety</motion.h1>
            <motion.p className='safe'
             animate={animation}
            >Safety is the most important part of every Tesla. we design our vechiles to <span>exceed safety standards.</span></motion.p>

            <motion.h3
             animate={animation}
            >5-Star Rating</motion.h3>
            <motion.p
             animate={animation}
            >Model 3 achieved NHTSA 5-Star safety ratings in every catagory and subcatagory.</motion.p>

            <motion.h3
             animate={animation}
            >Top Safety Pick+</motion.h3>
            <motion.p
             animate={animation}
            >Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories.</motion.p>
        </SideContainer>

        <SideContainerBottom ref={ref}>
            <motion.p
             animate={animation}
            ><AddCircleOutlineIcon style={{fontSize:'2.4em'}} />LEARN MORE</motion.p>
            <motion.button
             animate={animation}
            >ORDER NOW</motion.button>
        </SideContainerBottom>
    </Wrapper>
  )
}

export default Second

const Wrapper = styled.div`
    position:relative;
    width:100vw;
    height:100vh;
`
const Bg = styled.div`
    img{
        width:100vw;
        height:100vh;
        object-fit:cover;
    }
`

const SideContainer  =styled.div`
    position:absolute;
    top:75px;
    left:70%;
    right:5%;
    @media (max-width:767px){
        left:25%;
    }
    .safe span{
        border-bottom:1px solid #564d4d;
    }
`

const SideContainerBottom = styled.div`
    position:absolute;
    bottom:10%;
    right:10%;
    display:flex;
    align-items:center;
    @media (max-width:767px){
        bottom:15%;
        right:4%;
    }

    p{
        display:flex;
        justify-contnet:center;
        align-items:center;
        padding-right:24px;
        font-size:0.9em;
        font-weight:bold;
    }

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