import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import  { Link } from 'react-router-dom';



function Header() {

    const[MenuStatus, setMenuStatus] = useState(false);

  return (
    <Container>
        <Logo><img src={'/Images/Tesla.png'} alt='logo' /></Logo>
        <Menu  onClick={() => setMenuStatus(true)} >
            <p>Menu</p>
        </Menu>

        <NavContaniner show={MenuStatus}>
            <ButtonWrap>
                <CloseIcon onClick={() => setMenuStatus(false)} />
            </ButtonWrap>

            <li><Link to='/404'>Model S</Link></li>
            <li><Link to='/Model3'>Model 3</Link></li>
            <li><Link to='/404'>Model X</Link></li>
            <li><Link to='/404'>Model Y</Link></li>
            <li><Link to='/404'>Existing Inventory</Link></li>
            <li><Link to='/404'>Used Inventory</Link></li>
            <li><Link to='/404'>Trade-In</Link></li>
            <li><Link to='/404'>Test Drive</Link></li>
            <li><Link to='/404'>Shop</Link></li>
            <li><Link to='/404'>Support</Link></li>
            <li><Link to ='/Login'>Account</Link></li>
            
        </NavContaniner>

    </Container>
  )
}

export default Header


const Container = styled.div`
    min-height:6vh;
    width:96vw;
    position:fixed;
    top:0;
    z-index:9999999;
    display:flex;
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
    }
`

const Menu = styled.div`
    width:72px;
    height:30px;
    background:rgba(255,255,255,0.25);
    box-shadow:0 2px 6px rgba(0,0,0,0.15);
    backdrop-filter:blur(10px);
    border-radius:6px;
    position:relative;
    cursor:pointer;

    p{  
        font-size:1em;
        font-weight:bold;
        position:absolute;
        top:-5%;
        left:50%;
        transform:translate(-50%,-50%);
    }
`

const NavContaniner = styled.div`
    position:fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    transform:${props => props.show ? `translateX:(0%)` : `translateX(100%)`};
    transition:0.5s all;
    li{ 
        margin:6px;
        list-style:none;
        padding:12px 20px;
        border-bottom:1px solid rgba(0,0,0,0.2);

        :hover{
            background:rgba(0,0,0,0.05);
            border-radius:24px;
        }
    }

    li a{
        font-size:1.2em;
        font-weight:bold;
        color:black;
        text-decoration:none;
    }
`

const ButtonWrap = styled.div`
    width:98%;
    margin:5px;
    positon:relative;
    display:flex;
    align-items:center;
    justify-content:end;
    cursor:pointer;
`