import React,{ useState } from 'react'
import styled from 'styled-components'
import  InfoIcon from '@material-ui/icons/Info';
import { Link } from 'react-router-dom';


function Login() {

    const[PopupOpen, setPopupOpen] = useState(false);

  return (
    <Container>

        <Popup show={PopupOpen} onClick ={()=> setPopupOpen(false)}>
            <p>If your account is linked to an email address you no longer have access to, please sign into your account and update your email addresss under account settings<br /><br />If you have trouble signing in, please visit out support page</p>
        </Popup>

       <Form>
            <Title>Sign In</Title>

            <InputWrapper>
                <InfoGroup><Label for="email">Email Address </Label>
                    <Icon>
                        <InfoIcon onClick ={()=> setPopupOpen(true)} />
                    </Icon>
                </InfoGroup>

               <Input type="email" required />

                <Label for="password" required>password</Label>
                <Input type="password" />

                <SignInButton>SIGN IN</SignInButton>

                <Forget>
                    <li><Link to='/404'>Forget email?</Link></li>
                    <li><Link to='/404'>Forget password?</Link></li>
                </Forget>

                <Line />

                <CreateAccBtn>CREATE ACCOUNT</CreateAccBtn>
            </InputWrapper>
       </Form>
    </Container>
  )
}

export default Login

const Container = styled.div`
    width:100vw;
    height:100vh;
    position:relative;
    overflow-x:hidden;
`

const Form = styled.form`
    width:360px;
    height:520px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`

const Title = styled.h1`
    font-size:2em;
`
const InputWrapper = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-itmes:center;
`

const Label = styled.label`
    font-size:1.2em;
    position:relative;
    left:24px;
    padding:12px 0;
    @media (max-width:768px){
        font-size:1.1em;
    }
`

const InfoGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content:start;
`
const Icon = styled.div`
    padding-left:30px;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Input = styled.input`
    font-size:1em;
    padding-left:20px;
    width:342px;
    height:36px;
    border:none;
    background:transparent;
    outline:none;
    border:1px solid #000;
    border-radius:20px;

    :focus{
        border:1px solid #7d7d7d;
        background-color:rgba(0,0,0,0.1);
    }
`

const SignInButton = styled.button`
    font-size:1em;
    font-weight:bold;
    position:relative;
    width:366px;
    height:38px;
    top:30px;
    border:none;
    background:#3d6ae1;
    outline:none;
    border:1px solid #3d6ae1;
    border-radius:20px;
    color:white;
    cursor:pointer;
`

const Forget = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    position:relative;
    top:54px;

    li{
        list-style:none;
        text-decoration:underline;
        cursor:pointer;
    }

    li a{
        font-size:1.1em;
        color:black;
    }
`

const Line = styled.div`
    width:100%;
    border-bottom:1px solid rgba(0,0,0,0.2);
    position:relative;
    top:90px;
`

const CreateAccBtn = styled.button`
    font-size:0.84em;
    position:relative;
    width:366px;
    height:38px;
    top:136px;
    border:none;
    background:#fff;
    outline:none;
    border:3px solid #000;
    border-radius:20px;
    color:#000;
    cursor:pointer;
`

const Popup = styled.div`
    width:360px;
    height:240px;
    background-color:#fff;
    position:absolute;
    top:48%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:9999;
    filter:drop-shadow(0 2px 6px rgba(0,0,0,0.3));
    border-radius:8px;
    display:${props => props.show ? `block` : `none`};
    transition:1s all;
    p{  
        width:340px;
        font-size:1.1em;
        padding:30px 20px;

        @media (max-width:768px){
            width:340px;
            font-size:1em;
        }
    }
`