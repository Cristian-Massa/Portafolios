import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-weight: bolder;
`

const DivNav = styled.nav`
    overflow: hidden;
    z-index: 1;
    background-color: rgba(0, 0, 0, 1);
    width: 100%;
    height: 90px;
    flex-grow: 1;
`
const StyledLi = styled.li`
    display:flex;
    justify-content: space-around;
    flex-direction: row;
`



export const Nav = () => {
    return (
        <DivNav>
            <StyledLi>
                <ul>
                    <StyledLink to="/">Inicio</StyledLink>
                </ul>
                <ul>
                    <StyledLink to='Conocimientos'>Conocimientos</StyledLink>
                </ul>
                <ul>
                    <StyledLink to="Proyectos">Proyectos</StyledLink>
                </ul>
            </StyledLi>
        </DivNav>
    )
}