import styled from "styled-components";

export const PrincipalWindow = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    margin: 10px;
    width: 90vw;
    position: absolute;
    top: 150px;
    left: 5%;
    justify-self:center;
    border-radius: 2rem;
    display:grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    transition: transform-x(-100%) 1s;

    @media (max-width: 767px) {
        display:flex;
        flex-wrap: wrap;
        margin: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 0rem;
        grid-template-columns: auto;
        
      }
      @media (min-width: 768px) {
        background-color: rgba(0, 0, 0, 0.5);
        margin: 10px;
        width: 90%;
        position: absolute;
        top: 150px;
        left: 5%;
        justify-self:center;
        border-radius: 2rem;
        display:grid;
        grid-template-rows: auto auto;
        grid-template-columns: 50% 50%;
        transition: transform-x(-100%) 1s;
        
      }
`
export const SlideWindow = styled.div`
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
    border-radius: 0 2rem 2rem 0;
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: div 2;


    @media (max-width: 767px) {
        border-radius: 0;
        height: 50%;
      }
`
export const GeneralLink = styled.a`
    text-decoration: none;
    color: inherit; 
    transition: color 0.2s, font-size 0.2s;
    &:hover{
        color: yellow;
        font-size: 3vw;
    }
`


export const Titles = styled.h1`
    color: gray;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 3vw;
`
export const Text = styled.p`
    color: gray;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 2vw;
    
`

export const SubTitle = styled.h2`
    color: gray;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 2vw;
`

export const Botones = styled.button`
background-color: black;
color: white;
padding: 10px 20px;
height: 60px;
border: none;
border-radius: 5px;
font-size: 16px;
font-weight: bold;
text-align: center;
text-decoration: none;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    transition: all 0.3s ease;
}
`

export const Containerbtn = styled.div`
    justify-content:center;
    display: flex;
    flex-direction: columns;
    gap: 15px;

`