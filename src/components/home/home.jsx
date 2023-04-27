import React from "react";
import { PrincipalWindow } from "../generalStyles";
import styled from "styled-components";
import { Titles, Text, SubTitle } from "../generalStyles";


const DivHome = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: auto auto auto;
    padding: 10px;
`
export const Home = () =>{
    const randomTitle = ['¡Bienvenido/a a mi portafolio! Agradecemos tu interés y esperamos que encuentres valiosa información aquí.', 'Saludos cordiales, y bienvenido/a al repositorio de Cristian Massa. Esperamos que encuentres útiles los recursos que hemos preparado para ti.', 'Me complace que hayas decidido echar un vistazo a mi Portafolios. Si necesitas ayuda, no dudes en contactarme.', '¡Espero que encuentres nuestra colección de recursos útil y relevante!']
    const random = Math.floor(Math.random() * 4)
    return(
        <PrincipalWindow>
            <DivHome>
                <div>
                <Titles>{randomTitle[random]}</Titles>
                </div>
                <img src="/" alt="Foto"></img>
                <div>
                    <SubTitle> Informacion sobre mi</SubTitle>
                    <Text>Soy un apasionado estudiante de desarrollo full stack con un enfoque especial en programación front  end. Como uruguayo de 22 años, estoy buscando oportunidades para ganar experiencia y conocimientos en el campo de la programación. Actualmente, estoy estudiando en el prestigioso bootcamp de SoyHenry, donde he adquirido habilidades sólidas en desarrollo web y he aprendido a trabajar con tecnologías modernas. Además, también he completado un curso de maquetación web en Coder House y he adquirido conocimientos autodidactas en Express. Estoy emocionado de seguir desarrollando mis habilidades y contribuir a proyectos web de calidad como parte de mi viaje como programador front end.</Text>
                </div>
                <div>
                    
                </div>
            </DivHome>
        </PrincipalWindow>
    )
}