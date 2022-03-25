import React from 'react'
import styled from 'styled-components'
import  { Link } from 'react-router-dom'

function LeftLogo() {
  return (
    <Container>
        <Logo>
            <Link to='/'>
                <img src='/Images/Tesla.png' alt='logo' />
            </Link>
        </Logo>
    </Container>
  )
}

export default LeftLogo

const Container = styled.div`
    min-height:6vh;
    width:100vw;
    position:fixed;
    top:0;
    z-index:999999;
    align-items:center;
    justify-content:space-between;
`
const Logo = styled.div`
    a{
        cursor:pointer;
    }
    img{
        width:150px;
        height:75px;
        padding-left:12px;
    }
` 