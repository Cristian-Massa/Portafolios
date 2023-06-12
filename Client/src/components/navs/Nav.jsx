import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import {CgMenu} from 'react-icons/cg'
import logo from '../../utils/logo.png'
const Header = styled.header`
  ${tw`
    p-2
    md:p-5
    flex 
    flex-col
    md:flex-row
    md:place-content-between
    items-center
    justify-center
    gap-3 
    text-center
    bg-white
    bg-opacity-40
    h-auto
    mb-10
  `}
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(44,44,44,0.8100490196078431) 5%);
`;
const ToggleUi = styled.ul`
    ${tw`
    p-1
    gap-5
    h-0
    overflow-hidden
    sm:p-1
    md:h-auto
    md:flex
    md:flex-row
    lg:flex
    lg:h-auto
    `
    }
    height: ${(props) => (props.isOpen ? '100px' : '0')};
    transition: height 0.3s ease-in-out;
`


export const Nav = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <Header>
                <img src={logo} alt="logo" width="100px" />
            <nav>
                <button tw="visible sm:hidden " onClick={handleMenu} ><CgMenu /></button>
                <ToggleUi isOpen={isMenuOpen}>
                    <a href="#"><li>Inicio</li></a>
                    <a href="#"><li>Proyectos</li></a>
                    <a href="#"><li>Acerca de mi</li></a>
                </ToggleUi>
            </nav>
        </Header>
    )
}