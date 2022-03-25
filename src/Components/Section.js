import React from 'react'
import styled from 'styled-components'
import '../index.css'

function Section({ title, description, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemContent>
            <h1>{ title }</h1>
            <p>{ description }</p>
        </ItemContent>

        <Buttons>
            <ButtonGroup>
                <LeftBtn>Custom Order</LeftBtn>
                <RightBtn>Existing Inventory</RightBtn>
            </ButtonGroup>
        </Buttons>

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width:100vw;
    height:100vh;
    postion:relative;
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    background-image:${props => `url("/Images/${props.bgImage}")`};
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    overflow-x:hidden;
`
const ItemContent = styled.div`

    text-align:center;
    font-size:1.3em;
    animation:fading 1s linear forwards;

    @keyframes fading{
        0%{
            padding-top:24vh;
            opacity: 0;
        }
        100%{
            padding-top:18vh;
            opacity: 1;
        }
    }

    @media (max-width:768px){
        font-size:1em;
    }
`
const ButtonGroup = styled.div`
    display:flex;
    animation:fade 1s linear forwards;

    @keyframes fade{
        0%{
            margin-bottom:0px;
            opacity: 0;
        }
        100%{
            margin-bottom:24px;
            opacity: 1;
        }
    }

    @media (max-width:768px){
        flex-direction:column;
        margin-bottom:48px;
    }
`
const LeftBtn = styled.div`
    background-color:rgba(23, 26, 32, 0.8);
    width:256px;
    height:40px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:100px;
    opacity:0.85;
    text-transfrom:uppercase;
    font-size:1.1em;
    cursor:pointer;
    margin:6px;

    @media (max-width:768px){
        width:94vw;
    }
`
const RightBtn = styled(LeftBtn)`
    background:white;
    opacity:0.65;
    color:black;
`
const Buttons = styled.div``