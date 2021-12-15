import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 60vh;
background-color: #fab1a0;
display: flex;
align-items: center;
justify-content:center; 
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Description = styled.div`
font-size:20px;
font-weight: 300;
margin-bottom: 20px;
`
const InputCounter = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content:space-between;

`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color:teal;
color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing eligendi ex veniam dolorum! Rem, quas. Ullam, inventore at?</Description>
            <InputCounter>
            <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
            </InputCounter>      
        </Container>
    );
};

export default Newsletter;