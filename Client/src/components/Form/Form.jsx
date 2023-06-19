import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { DefaultBTN } from "../GlobalStyles";
import axios from "axios"

export const Form = () => {
    const [message, setMessage] = useState({
        name: '',
        email: '',
        type: 'Contactar',
        message: '',
      });
    const [result, setResult] = useState('')
    const  handleInput = (e) =>{
        const value = e.currentTarget.value
        setMessage({
            ... message,
                [e.currentTarget.name]: value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/message', message,{
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response =>{
                setResult('se ha enviado')
            })
            .catch((err) =>{
                setResult('no se ha podido enviar revise los campos')
            })
    }
    return (
        <section id="Form">
            <StyledDiv>
                <div>
                    <h2>¿Te intereso mi perfil?<br /> puedes contactarme llenando el formulario</h2>
                </div>
                <FormDiv>
                    <StyledForm onSubmit={handleSubmit}>
                        <label htmlFor="Nombre y apellido"><p>Nombre y apellido:</p></label>
                        <input onChange={handleInput} type="text" name="name" placeholder="Juan Carlos" required />
                        <label htmlFor="email"><p>Email:</p></label>
                        <input onChange={handleInput} type="email" name="email" id="" placeholder="ejemplo@gmail.com" required />
                        <label for="type"><p>Asunto:</p></label>
                        <select onChange={handleInput} name="type" >
                            <option value="Contactar">Contactar</option>
                            <option value="Consulta">Consulta</option>
                            <option value="Recomendacion">Recomendacion</option>
                            <option value="Presupuesto">Presupuesto</option>
                        </select>
                        <label htmlFor="mensaje"><p>Mensaje:</p></label>
                        <textarea onChange={handleInput} name="message" placeholder="Escribe aqui tu mensaje" />
                        <DefaultBTN>Enviar</DefaultBTN>
                    </StyledForm>
                </FormDiv>

            </StyledDiv>
        </section>
    )
}
const FormDiv = styled.div`
${tw`
  grid
  justify-center
  items-center
`}
`;

const StyledDiv = styled.div`
${tw`
  flex
  flex-col
  gap-10
  justify-center
  items-center
  min-h-screen
`}
`;

const StyledForm = styled.form`
${tw`
  grid
  justify-center
  items-center
  bg-gray-900
  md:px-20
  md:py-20
  p-5
  rounded-xl
  opacity-90
  border
  border-amber-500
  w-full
  max-w-md
  gap-5
`}
`;