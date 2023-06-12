import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import react from "../../utils/icons/react.png"
import node from "../../utils/icons/node.png"
import postgre from "../../utils/icons/postgre.png"
import html from "../../utils/icons/html.png"
import reactNative from "../../utils/icons/react-native.png"
import php from "../../utils/icons/php.svg"
import js from "../../utils/icons/js.png"
import css from "../../utils/icons/css.png"
import photo from "../../utils/photo.jpg"
import { DefaultBTN } from "../GlobalStyles";
import cv from "../../utils/cv/cv.pdf"
// const Section = styled.section`
//     ${tw`
//         mx-5
//         justify-self-center
//         rounded-md	
//         bg-white
//         h-auto
//         p-5
//         text-center
//         justify-center
//         my-5
//     `}
// `

const Div = styled.div`
    ${tw`
        flex
        flex-col
        lg:grid
        lg:grid-cols-4
        lg:items-center
    `}
`

const Img = styled.img`
  ${tw`
    w-1/3
    mx-auto
    md:w-1/12
    m-2
    object-contain
  `}
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;

const ImgContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    md:flex-row
    md:justify-center
    sm:my-5
    md:m-10
  `}
`;
const Photodiv = styled.div`
  ${tw`
    flex
    flex-col
    items-center
    justify-center
    lg:justify-start
  `}
`;
const Photo = styled.img`
    height: 400px;
    width: 250px;
  border-radius: 2rem;
  height: 100%
`
const SecondContainer = styled.article`
  ${tw`
  col-span-3
  `}

`

export const Home = () => {
    return (
        <section>
            <Div>
                <article>
                    <Photodiv>
                        <Photo src={photo} alt="foto de perfil" />
                        <p>Cristian Egard Massa Martinez</p>
                    <p>Desarrollador FullStack</p>
                    </Photodiv>

                </article>
                <SecondContainer>
                    <div>

                        <div>
                            <h2>Bienvenido a mi portafolio</h2>
                            <p>
                               Soy un estudiante de desarrollo web full stack de 22 años que reside en Uruguay. Actualmente, me encuentra participando en el programa de formación de SoyHenry, un bootcamp especializado en tecnología, donde estoy adquiriendo conocimientos y habilidades en diferentes áreas de desarrollo web.
                            </p>
                            <DefaultBTN>Conoceme mas</DefaultBTN>
                            <a href={cv} download>
                                <DefaultBTN >Mi CV</DefaultBTN>
                            </a>
                        </div>
                        <div>
                            <h2>Tecnologias</h2>
                            <h3>actualmente puedo emplear</h3>
                            <ImgContainer>
                                <Img src={html} alt="html" />
                                <Img src={css} alt="css" />
                                <Img src={js} alt="js" />
                                <Img src={react} alt="react" />
                                <Img src={node} alt="node" />
                                <Img src={postgre} alt="postgres" />
                            </ImgContainer>
                            <h3>Me gustaria aprender</h3>
                            <ImgContainer>
                                <Img src={reactNative} />
                                <Img src={php} />
                            </ImgContainer>
                        </div>
                    </div>
                </SecondContainer>
            </Div>
        </section>
    )
}