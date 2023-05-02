import React from "react";
import styled from 'styled-components';
import background from '../../utils/background.mp4'
import { Botones, SubTitle, Titles, Containerbtn } from "../generalStyles";
import { useDispatch, useSelector } from "react-redux";
import { landingClick, redirection } from "../../redux/actions/actions";
import finalPropsSelectorFactory from "react-redux/es/connect/selectorFactory";

const AnimateVideo = styled.video`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    &::-webkit-media-controls {
        display: none !important;
      }
`
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`
const Content = styled.div`
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background:rgba(240, 240, 240, 0.7);
    height: 50%;
    border-radius: 1rem;
    width: 50%;
    z-index: 3;
    display: grid;
    justify-content:center;
    text-align:center;
`



export const Landing = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    function handleClick (e) {
        const value = e.currentTarget.value
        dispatch(landingClick())
        dispatch(redirection(value))
        console.log(value)
    }
    return (
        <div>
            <AnimateVideo src={background} autoPlay muted controls="false" loop />
            <Overlay>
                <Content>
                    <Titles style={{fontWeight : "bolder"}}>CRISTIAN MASSA</Titles>
                    <SubTitle>Programador full stack con fuertes tendencias hacia el desarrollo front end</SubTitle>
                    <Containerbtn>
                        <Botones value="/" onClick={handleClick}>Sobre Mi</Botones>
                        <Botones value="/" onClick={handleClick}>CV</Botones>
                        <Botones value="/Proyectos" onClick={handleClick}>Proyectos</Botones>
                    </Containerbtn>
                </Content>
            </Overlay>
        </div>
    )
}