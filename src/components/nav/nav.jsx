import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Projects } from "../projects/projects";
import {Home} from '../home/home'
import {Skills} from '../skills/skills'
import { WantToLearn } from "../wantToLearn/wantToLearn";
import logo from '../../utils/logo.png'


const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bolder;
`
const DivNav = styled.nav`
    
    background-color: rgba(0, 0, 0, 0.7);
    width: 100vw;
    height: 90px;
    flex-grow: 1;
`
const StyledLi = styled.li`
display: flex;
width: 100vw;
justify-content: space-around;
align-items: center
text-align: center;

`

const Img = styled.img`
position: absolute;
left: 50%;
transform: translate(-50%, 0%);
width: 150px;
border-radius: 50%;
max-width: 90%;
padding: 1rem;
`

export const Nav = () =>{
    return(
        <DivNav>
            <StyledLi>
                <ul>
                    <StyledLink to="/">Inicio</StyledLink>
                </ul>
                <ul>
                    <StyledLink to="Proyectos">Proyectos</StyledLink>
                </ul>
                <ul>
                    <StyledLink to='Conocimientos'>Conocimientos</StyledLink>
                </ul>
            </StyledLi>
            <Img src={logo} alt="Logo" />
        </DivNav>
    )
}