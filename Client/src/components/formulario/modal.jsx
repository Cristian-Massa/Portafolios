import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Botones, PrincipalWindow } from "../generalStyles";
import { modal } from "../../redux/actions/actions";
import { Text } from "../generalStyles";
import axios from "axios"


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
border: white 1px solid;
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
const TextArea = styled.textarea`
    resize: none;
`

export const Modal = () => {
    const [window, setWindow] = useState(false)
    const [message, setMessage] = useState({
        name: '',
        email: '',
        type: '',
        message: '',
    })
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    function handleClick() {
        setWindow(false)
        dispatch(modal(false))
    }

    function handleText(e) {
        let value = e.currentTarget.value
        setMessage({
            ...message,
            [e.currentTarget.name]: value
        })
        console.log(message)
    }

    function handleSubmit(e) {
        console.log(message)
        axios.post('http://localhost:3001/message', message, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        e.preventDefault();

    }
    return (
        <Background>
            <TransparentBTN onClick={handleClick} />
            <ModalWindow>
                <Botones onClick={handleClick}>x</Botones>
                <form onSubmit={handleSubmit}>
                    <label for="nombre"><Text>Nombre:</Text></label>
                    <input onChange={handleText} type="text" id="nombre" name="name" required />

                    <label for="email"><Text>Email:</Text></label>
                    <input onChange={handleText} type="email" id="email" name="email" required />

                    <label for="type"><Text>Asunto:</Text></label>

                    <select name="type" onChange={handleText}>
                        <option value="Contactar">Contactar</option>
                        <option value="Consulta">Consulta</option>
                        <option value="Recomendacion">Recomendacion</option>
                        <option value="Presupuesto">Presupuesto</option>
                    </select>


                    <label for="mensaje"><Text>Mensaje:</Text></label>
                    <TextArea onChange={handleText} id="mensaje" name="message" required style={{ width: "300px", height: "100px" }}></TextArea>

                    <div style={{ textAlign: "center" }}>
                        <Botones>Enviar</Botones>

                    </div>
                </form>
            </ModalWindow>
        </Background>
    )
}