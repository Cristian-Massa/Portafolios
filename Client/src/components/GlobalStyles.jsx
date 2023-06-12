import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyle = createGlobalStyle`
    main{
        height:100%;
    }
    section{
        ${tw`
        mx-5
        justify-self-center
        rounded-md	
        bg-white
        h-auto
        p-5
        text-center
        justify-center
        my-5
        `}
    }
    h1{
        font-family: 'Raleway', sans-serif;
        ${tw`
            text-6xl 
            font-bold
            text-white
            `}
    }
    h2{
        ${tw`
            text-3xl
            font-bold
            `}
            font-family: 'Raleway', sans-serif;
    }
    h3{
        font-family: 'Raleway', sans-serif;
        text-2xl
        font-bold
    }
    p{
        font-family: 'Poiret One', cursive;
        ${tw`
            text-xl 
            font-normal
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
    video::-webkit-media-controls{
        display: none;
    }
    li {
        ${tw`
            text-xl
        `}
        transition: transform 0.5s;
      }
      
      li:hover {
        color: #ff9800;
        transform: scale(1.1);
      }

`
export const DefaultBTN = styled.button`
    ${tw`
        bg-black
        rounded-lg
        text-white
        w-40
        h-10
        m-5
        font-semibold
    `}
`