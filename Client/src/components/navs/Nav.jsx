import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import { CgMenu } from 'react-icons/cg'
import logo from '../../utils/logo.png'
import {Link, animateScroll as scroll} from "react-scroll"

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
        <header id="header">
            <div tw="md:flex">
                <img src={logo} alt="logo" width="100px" />
            </div>
            <nav>
                <button tw="visible sm:hidden " onClick={handleMenu} ><CgMenu /></button>
                <ToggleUi isOpen={isMenuOpen}>
                <Link to="home" smooth={true} duration={500}><li>Inicio</li></Link>
                <Link to="Project" smooth={true} duration={500}><li>Proyectos</li></Link>
                </ToggleUi>
            </nav>
        </header>
    )
}