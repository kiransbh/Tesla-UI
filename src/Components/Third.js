import React,{ useEffect } from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import  { motion, useAnimation } from 'framer-motion' 
import  { useInView } from 'react-intersection-observer'

function Three() {

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
},[inView,animation])


  return (
    <Wrapper>
      <Bg>
        <img className='bg' src={'/Images/Model-3/6.jpg'} alt='model3' />
      </Bg>
      <Top>
          <motion.p className='p'
           animate={animation}
           ref={ref} >Performance</motion.p>
          <motion.h2
           animate={animation}
          >Quickest Acceleration</motion.h2>
      </Top>
      <Performance>
        <motion.p
         animate={animation}
        ><AddCircleOutlineIcon style={{fontSize:'2.4em'}} />LEARN MORE</motion.p>
        <motion.button
         animate={animation}
        >ORDER NOW</motion.button>
      </Performance>

      <motion.p className='info'
       animate={animation}
      >
        Model 3 comes with the option of dual motor all-wheel drive, 20" Uberturbine Wheels and Performance Brakes for total control in all weather conditons. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds.
      </motion.p>
    </Wrapper>
  )
}

export default Three

const Wrapper = styled.div`
  position:relative;
  width:100vw;
  height:100vh;
  color:white;

  .info{
    position:absolute;
    bottom:19%;
    left:45%;
    right:10%;
    font-size:1.14em;
    @media (max-width:767px){
      bottom:30%;
      left:5%;
      right:5%;
      font-size:1.05em;
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

const Performance = styled.div`
    position:absolute;
    bottom:10%;
    left:15%;
    display:flex;
    align-items:center;
    @media (max-width:767px){
     display:flex;
     flex-direction:row;
     bottom:20%;
    left:5%;
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
        border:1.8px solid white;
        border-radius:20px;
        cursor:pointer;
        color:white;
        font-weight:bold;
    }
`

const Top = styled.div`
  position:absolute;
  bottom:20%;
  left:15%;
  @media (max-width:767px){
    visibility:hidden;   
  }

  h2{
    font-size:1.8em;
  }
`