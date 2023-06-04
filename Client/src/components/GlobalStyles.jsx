import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyle = createGlobalStyle`
    h1{
        ${tw`
            text-xl 
            text-white
        `}
    }
    ul{
        ${tw`
            text-white
        `}
    }
`