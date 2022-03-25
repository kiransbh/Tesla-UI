import React from 'react'
import styled from 'styled-components'

function ErrorPage() {
  return (
    <Wrapper>

      <Bg>
        <img src='/Images/tesla-logo.png' alt='logo' />
      </Bg>

      <h1>404-page not found</h1>

    </Wrapper>
  )
}

export default ErrorPage

const Wrapper =styled.div`
  position:relaitve;
  width:100vw;
  height:100vh;

  h1{
    font-size:2.4em;
    position:absolute;
    top:60%;
    left:38%;
    transfrom:translate(-50%,-50%);
    border-bottom:2px solid black;

    @media (max-width:767px){
      left:50%;
      font-size:1.2em;
      transform:translate(-50%,-50%);
    }
  }
`
const Bg = styled.div`
  img{
    width:20vw;
    height:40vh;
    position:absolute;
    top:36%;
    left:50%;
    transform:translate(-50%,-50%);

    @media (max-width:767px){
      width:36vw;
      height:30vh;
      top:44%;
    }
  }
`