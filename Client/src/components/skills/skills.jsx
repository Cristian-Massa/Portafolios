import React, { useState } from "react";
import { PrincipalWindow, SubTitle } from "../generalStyles";
import css from '../../utils/logos/css.png'
import html5 from '../../utils/logos/html5.png'
import js from '../../utils/logos/js.png'
import node from '../../utils/logos/node.png'
import postgre from '../../utils/logos/postgre.png'
import react from '../../utils/logos/react.png'
import redux from '../../utils/logos/redux.png'
import styled from "styled-components";
import { Botones } from "../generalStyles";

const Img = styled.img`
    width: 200px;
    pointer-events: none;
    height: 200px;
    margin: 30px;
`
const List = styled.div`
    padding: 40px;
    text-align: center;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    align-items: center;
    width: 100%;
`

const Elements = styled.div`
    width:100%;
`
const ElementInfo = styled.div`
background-color: rgba(0, 0, 0, 0.7);
width: 100%;
height: 500px;
`

const InvisibleBTN = styled.button`
    background-color: transparent;
    border: none;
    transition: transform 0.5s;
    &:hover{
        
        transform: scale(1.2);
        }
`
export const Skills = () => {
    const [toggleInfo, setToggleInfo] = useState('')

    const handleClick = (e) => {
        setToggleInfo(e.target.value)
    }

    const options = {
        html: {
            language: 'html',
            img: html5,
            description: '',
        },
        css: {
            language: 'css',
            img: css,
            description: '',
        },
        js: {
            language: 'js',
            img: js,
            description: '',
        },
        react: {
            language: 'react',
            img: react,
            description: '',
        },
        redux: {
            language: 'redux',
            img: redux,
            description: '',
        },
        postgre: {
            language: 'postgre',
            img: postgre,
            description: '',
        },
        node: {
            language: 'node',
            img: node,
            description: '',
        },

    }

    return (
        <PrincipalWindow style={{ gridTemplateColumns: "auto" }}>
            <List>
                <SubTitle>Lenguajes</SubTitle>
                <Elements>
                    <InvisibleBTN onClick={handleClick} value="html, Lenguajes">
                        <Img src={html5} />
                    </InvisibleBTN>
                    <InvisibleBTN onClick={handleClick} value="css, Lenguajes">
                        <Img src={css} />
                    </InvisibleBTN>
                    <InvisibleBTN onClick={handleClick} value="js, Lenguajes">
                        <Img src={js} />
                    </InvisibleBTN>
                    {toggleInfo.includes('Lenguajes') ?
                        <ElementInfo>
                            <Botones onClick={handleClick} value="">x</Botones>
                        </ElementInfo> : null}
                </Elements>
                <SubTitle>Otros</SubTitle>
                <Elements>
                    <InvisibleBTN onClick={handleClick} value="node, Otros">
                        <Img src={node} />
                    </InvisibleBTN>
                    <InvisibleBTN onClick={handleClick} value="postgre, Otros">
                        <Img src={postgre} />
                    </InvisibleBTN>
                    <InvisibleBTN onClick={handleClick} value="react, Otros">
                        <Img src={react} />
                    </InvisibleBTN>
                    <InvisibleBTN onClick={handleClick} value="redux, Otros">

                        <Img src={redux} />
                    </InvisibleBTN>
                    {toggleInfo.includes('Otros') ?
                        <ElementInfo>
                            <Botones onClick={handleClick} value="">x</Botones>
                        </ElementInfo> : null}
                </Elements>
            </List>
        </PrincipalWindow>
    )
}