import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";


export const GlobalStyle = createGlobalStyle`
    main{
        height:100%;
    }
    section{
        ${tw`
        justify-self-center
        min-h-screen
        bg-gray-800 bg-opacity-90
        h-auto
        p-5
        text-center
        justify-center
        
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
            text-white
            `}
            font-family: 'Raleway', sans-serif;
    }
    h3{
        font-family: 'Raleway', sans-serif;
        text-2xl
        font-bold
        text-white
    }
    p{
        font-family: 'Poiret One', cursive;
        ${tw`
            text-xl 
            font-normal
            text-white
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
        cursor: pointer;
      }
      
      li:hover {
        color: #ff9800;
        transform: scale(1.1);
      }
      header{
        ${tw`
        fixed
        top-0
        w-screen
        z-1
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
        bg-gray-800
        h-auto
        mb-10
      `}
      transition: transform 0.5s ease-in-out;
      }
      select{
        ${tw`
        bg-black
        text-white
        rounded-lg
        p-2
        `}
      }
      textarea{
        ${tw`
            md:w-80
            md:h-40
            rounded-md
        `}
      }
      input{
        ${tw`
            rounded-md
        `}
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

        hover:bg-orange-500
        transition duration-200 ease-in-out
    `}
`