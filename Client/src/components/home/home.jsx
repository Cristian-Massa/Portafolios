import React from "react";
import { Botones, PrincipalWindow, SlideWindow } from "../generalStyles";
import styled from "styled-components";
import { Titles, Text, SubTitle } from "../generalStyles";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../formulario/modal";
import { modal } from "../../redux/actions/actions";
import linkedin from '../../utils/linkedin-blue.svg';
import github from '../../utils/icons8-github.svg'


const Elements = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
`

export const Home = () => {
    const randomTitle = ['¡Bienvenido/a a mi portafolio! Agradecemos tu interés y esperamos que encuentres valiosa información aquí.', 'Saludos cordiales, y bienvenido/a al repositorio de Cristian Massa. Esperamos que encuentres útiles los recursos que hemos preparado para ti.', 'Me complace que hayas decidido echar un vistazo a mi Portafolios. Si necesitas ayuda, no dudes en contactarme.', '¡Espero que encuentres nuestra colección de recursos útil y relevante!']
    const random = Math.floor(Math.random() * 4)
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    function handleClick() {
        dispatch(modal(true))
        console.log(state)
    }

    return (

        <PrincipalWindow style={{ gridTemplateColumns: "auto 30%" }}>
            {state.modalActive ? <Modal /> : null}
            <div>
                <Titles>{randomTitle[random]}</Titles>
            </div>

            <SlideWindow>
                <Elements>
                    <img src="/" alt="Foto"></img>
                    <div>
                        <a href="https://www.linkedin.com/in/cristian-massa-5880931a3/" target="_blank"><img src={linkedin} alt="Linkedin" width="50px" /></a>
                        <a href="https://github.com/Cristian-Massa" target="_blank"><img src={github} alt="Github" /></a>
                    </div>
                </Elements>
            </SlideWindow>
            <div>
                <SubTitle> Informacion sobre mi</SubTitle>
                <Text>Soy un apasionado estudiante de desarrollo full stack con un enfoque especial en programación front  end. Como uruguayo de 22 años, estoy buscando oportunidades para ganar experiencia y conocimientos en el campo de la programación. Actualmente, estoy estudiando en el prestigioso bootcamp de SoyHenry, donde he adquirido habilidades sólidas en desarrollo web y he aprendido a trabajar con tecnologías modernas. Además, también he completado un curso de maquetación web en Coder House y he adquirido conocimientos autodidactas en Express. Estoy emocionado de seguir desarrollando mis habilidades y contribuir a proyectos web de calidad como parte de mi viaje como programador front end.</Text>
            </div>
            <div style={{ margin: '30px' }}>
                <Botones onClick={handleClick}>Contactame</Botones>
            </div>


        </PrincipalWindow>
    )
}