import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import react from "../../utils/icons/react.png"
import node from "../../utils/icons/node.png"
import postgre from "../../utils/icons/postgre.png"
import html from "../../utils/icons/html.png"
import js from "../../utils/icons/js.png"
import css from "../../utils/icons/css.png"


const Section = styled.section`
    ${tw`
        container
        rounded-md	
        bg-white
        h-auto
        p-5
        text-center
        justify-center
        my-5
    `}
`

const Div = styled.div`
    ${tw`
        flex
        flex-col
    `}
`

const Img = styled.img`
  ${tw`
    w-16
    min-w-0
    m-3
  `}
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const ImgContainer = styled.div`
  ${tw`
    flex
    flex-row
    justify-center
    m-10
  `}
`;

export const Home = () => {
    return (
        <Section>
            <article>
                <h2>Bienvenido a mi portafolio</h2>
            </article>
            <Div>
                <article>
                    <img src="" alt="foto de perfil" />
                    <p>Cristian Egard Massa Martinez</p>
                    <p>Desarrollador FullStack</p>
                    <p>Hola, soy Cristian, un apasionado estudiante de desarrollo web de Uruguay. Con 22 años, estoy dedicado a adquirir habilidades en el campo de la programación. Actualmente, estoy estudiando desarrollo web en el bootcamp SoyHenry, donde me estoy formando en JavaScript, React, CSS, Node.js, Express, SQL, PostgreSQL y Sequelize.

Además de mi formación formal, estoy explorando otras tecnologías por mi cuenta, y una de mis áreas de interés es React Native para el desarrollo de aplicaciones móviles. A medida que progrese en mi aprendizaje y me sienta más cómodo con el desarrollo web, mi objetivo es expandir mis conocimientos y habilidades para crear aplicaciones tanto para dispositivos móviles como de escritorio.

Estoy emocionado por el desafío que representa el aprendizaje de nuevas tecnologías y estoy dispuesto a enfrentar cualquier proyecto que me permita crecer y adquirir experiencia. Siempre estoy abierto a nuevas oportunidades y a colaborar en proyectos emocionantes que me permitan aplicar mis habilidades y conocimientos.

Estoy entusiasmado por seguir avanzando en mi carrera como desarrollador web y estar preparado para el emocionante mundo del desarrollo móvil en un futuro cercano</p>
                </article>
                <article>
                    <p>Tecnologias</p>
                    <ImgContainer>
                        <Img src={html} alt="html" />
                        <Img src={css} alt="css" />
                        <Img src={js} alt="js" />
                        <Img src={react} alt="react" />
                        <Img src={node} alt="node" />
                        <Img src={postgre} alt="postgres" />
                    </ImgContainer>
                </article>
            </Div>
        </Section>
    )
}