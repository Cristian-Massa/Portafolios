import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyle = createGlobalStyle`
    h1{
        ${tw`
            text-3xl 
            font-bold
            text-white
        `}
    }
    h2{
        ${tw`
            text-2xl
            font-bold

        `}
    }
    ul{
        ${tw`
            text-white
        `}
    }
    video{
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-size: cover;
        pointer-events: none;
        z-index: -1;
        position: fixed;
    }
`