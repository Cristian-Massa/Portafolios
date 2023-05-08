import React from "react";
import { Botones, PrincipalWindow, SlideWindow } from "../generalStyles";
import styled from "styled-components";
import { Titles, Text, SubTitle } from "../generalStyles";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../formulario/modal";
import { modal } from "../../redux/actions/actions";

export const Home = () =>{
    const randomTitle = ['¡Bienvenido/a a mi portafolio! Agradecemos tu interés y esperamos que encuentres valiosa información aquí.', 'Saludos cordiales, y bienvenido/a al repositorio de Cristian Massa. Esperamos que encuentres útiles los recursos que hemos preparado para ti.', 'Me complace que hayas decidido echar un vistazo a mi Portafolios. Si necesitas ayuda, no dudes en contactarme.', '¡Espero que encuentres nuestra colección de recursos útil y relevante!']
    const random = Math.floor(Math.random() * 4)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    function handleClick () {
        dispatch(modal(true))
        console.log(state)
    }

    return(
        <div>

        {state.modalActive ? <Modal /> : null}
        <PrincipalWindow>
                <div>
                <Titles>{randomTitle[random]}</Titles>
                </div>

                <SlideWindow>
                <img src="/" alt="Foto"></img>
                </SlideWindow>
                <div>
                    <SubTitle> Informacion sobre mi</SubTitle>
                    <Text>Soy un apasionado estudiante de desarrollo full stack con un enfoque especial en programación front  end. Como uruguayo de 22 años, estoy buscando oportunidades para ganar experiencia y conocimientos en el campo de la programación. Actualmente, estoy estudiando en el prestigioso bootcamp de SoyHenry, donde he adquirido habilidades sólidas en desarrollo web y he aprendido a trabajar con tecnologías modernas. Además, también he completado un curso de maquetación web en Coder House y he adquirido conocimientos autodidactas en Express. Estoy emocionado de seguir desarrollando mis habilidades y contribuir a proyectos web de calidad como parte de mi viaje como programador front end.</Text>
                </div>
                <div style={{margin: '30px'}}>
                    <Botones onClick={handleClick}>Contactame</Botones>
                </div>


        </PrincipalWindow>
    </div>
    )
}