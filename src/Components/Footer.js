import React, { useEffect } from 'react'
import styled from 'styled-components'
import  { motion, useAnimation } from 'framer-motion' 
import  { useInView } from 'react-intersection-observer'

function Footer() {

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
            x:50,
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
            <img className='bg' src={'/Images/Model-3/8.jpg'} alt='model3' />
        </Bg>

        <ButtonGroup>
          <motion.h3
           animate={animation}
           ref={ref}>Experience Model 3</motion.h3>
          <motion.button className='a'
           animate={animation}
          >ORDER NOW</motion.button>
          <motion.button className='b'
           animate={animation}
          >COMPARE</motion.button>
        </ButtonGroup>
      </Wrapper>
  )
}

export default Footer

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
const ButtonGroup = styled.div`
  position:absolute;
  top:36%;
  left:15%;
  transfrom:translate(-50%,-50%);
  @media (max-width:767px){
    top:24%;
    left:0%;
    display:flex;
    flex-direction:column;
  }

  h3{
    font-size:1.6em;
  }

  button{
    width:200px;
    height:40px;
    outline:none;
    border:none;
    background:transparent;
    border:1.8px solid black;
    border-radius:20px;
    cursor:pointer;
    font-weight:bold;
    @media (max-width:767px){
      
    }
  }

  .a{
    background-color:black;
    color:white;
  }

  .b{
    margin-left:16px;
    @media (max-width:767px){
     margin-left:0px; 
     margin-top:10px; 
    }
  }
`