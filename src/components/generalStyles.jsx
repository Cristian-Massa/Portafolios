import styled from "styled-components";
import React from "react";

export const PrincipalWindow = styled.div`
    background-color: white;
    margin: 50px;
`

export const Titles = styled.p`
    color: black;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 45px;
`
export const Text = styled.h1`
    color: gray;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 24px;
`

export const SubTitle = styled.p`
    color: gray;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 34px;
`

export const Botones = styled.button`
background-color: black;
color: white;
padding: 10px 20px;
height: 60px;
border: none;
border-radius: 5px;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    transition: all 0.3s ease;
}
`

export const Containerbtn = styled.div`
    justify-content:center;
    display: flex;
    flex-direction: columns;
    gap: 15px;

`