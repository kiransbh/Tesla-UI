import React, { useEffect } from 'react'
import styled from 'styled-components'
import  { motion, useAnimation } from 'framer-motion' 
import  { useInView } from 'react-intersection-observer'

function Four() {

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
            y:50,
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
        <img className='bg' src={'/Images/Model-3/3.jpg'} alt='model3' />
      </Bg>

      <Motor ref={ref}>
        <motion.h2
        animate={animation}
        >Dual Motor</motion.h2>
        <motion.button
        animate={animation}
        >ORDER NOW</motion.button>
      </Motor>

      <motion.p className='info'
      animate={animation}
      >
        Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintainence and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.
      </motion.p>
    </Wrapper>
  )
}

export default Four

const Wrapper = styled.div`
  position:relative;
  width:100vw;
  height:100vh;

  .info{
    position:absolute;
    bottom:15%;
    left:45%;
    right:10%;
    font-size:1.14em;
    @media (max-width:767px){
      bottom:30%;
      left:7.5%;
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

const Motor = styled.div`
    position:absolute;
    bottom:17.5%;
    left:15%;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:0;
    @media (max-width:767px){
      bottom:20%;
      left:7.5%;
      flex-direction:row;
      justify-content:center;
      align-items:center;
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
        @media (max-width:767px){
          margin:20px;
        }
    }
`