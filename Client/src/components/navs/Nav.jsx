import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import { CgMenu } from 'react-icons/cg'
import logo from '../../utils/logo.png'
import { useDispatch } from "react-redux";

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
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header>
            <div tw="md:flex">
                <img src={logo} alt="logo" width="100px" />
            </div>
            <nav>
                <button tw="visible sm:hidden " onClick={handleMenu} ><CgMenu /></button>
                <ToggleUi isOpen={isMenuOpen}>
                    <a href="#home"><li>Inicio</li></a>
                    <a href="#Project"><li>Proyectos</li></a>
                    <a href="#"><li>Acerca de mi</li></a>
                </ToggleUi>
            </nav>
        </header>
    )
}