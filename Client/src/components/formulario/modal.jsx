import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Botones, PrincipalWindow } from "../generalStyles";
import { modal } from "../../redux/actions/actions";
import { Text } from "../generalStyles";


const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    top: 0;
    position: fixed;
    z-index: 1;
`
const TransparentBTN = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 2;
`

const ModalWindow = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5%;
    z-index: 3;
    background-color: rgba(0, 0, 0, 0.5);
    margin: 50px;
    border-radius: 2rem;
    display:grid;
`

export const Modal = () => {
    const [window, setWindow] = useState(false)
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    function handleClick() {
        setWindow(false)
        dispatch(modal(false))
    }

    function handleSubmit(e) {
        e.preventDefault();

    }
    return (
        <Background>
            <TransparentBTN onClick={handleClick} />
            <ModalWindow>
                <Botones onClick={handleClick}>x</Botones>
                <form onSubmit={handleSubmit}>
                    <label for="nombre"><Text>Nombre:</Text></label>
                    <input type="text" id="nombre" name="nombre" required />

                        <label for="email"><Text>Email:</Text></label>
                        <input type="email" id="email" name="email" required />

                            <label for="mensaje"><Text>Mensaje:</Text></label>
                            <textarea id="mensaje" name="mensaje" required style={{width: "300px", height: "100px"}}></textarea>

                            <div style={{textAlign: "center"}}>
                            <Botones>Enviar</Botones>

                            </div>
                        </form>
                    </ModalWindow>
                </Background>
                )
}