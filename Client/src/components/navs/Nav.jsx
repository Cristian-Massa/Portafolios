import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import {VscMenu} from 'react-icons/vsc'

const Header = styled.header`
    ${tw`
        sticky 
        grid
        md:grid-cols-2 
        lg:grid-cols-2
        justify-center 
        text-center
        bg-white
        bg-opacity-40 
    `}
`
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
    height: ${(boolean) => (boolean.isOpen ? 'auto' : '0px')};
    transition: height 0.3s ease-in-out;

`

export const Nav = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenu = () =>{
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <Header>
                <img src="logo" alt="logo" />
                <h1>Cristian Massa portafolios</h1>
            <nav>
                <button tw="visible sm:hidden" onClick={handleMenu} ><VscMenu /></button>
                <ToggleUi isOpen={isMenuOpen}>
                    <li>Inicio</li>
                    <li>Proyectos</li>
                    <li>Acerca de mi</li>
                </ToggleUi>
            </nav>
        </Header>
    )
}