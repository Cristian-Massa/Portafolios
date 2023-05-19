import React from "react";
import { PrincipalWindow } from "../generalStyles";
import { useSelector } from "react-redux";
import { idGenerator } from "../../function/idGenerator";
import { useState } from "react";
import { Text, SubTitle, GeneralLink, SlideWindow } from "../generalStyles";

export const Projects = () => {
    const state = useSelector(state => state)
    const ProjectId = idGenerator()
    console.log(state.projects)
    let i = 0


    return (
        <PrincipalWindow>
            <div style={{ gridTemplateColumns: "auto", padding: "30px" }}>
                {
                    state.projects?.map(element => (
                        <div>
                            <SubTitle><GeneralLink href={element.html_url} target="_blank">{`${element.name}`}</GeneralLink></SubTitle>
                            <Text>{`${element.language}`}</Text>
                        </div>
                    ))
                }
            </div>
            <SlideWindow>
                <div style={{ gridTemplateColumns: "auto", padding: "30px" }}>
                    <label htmlFor="Tecnologias">Tecnologias:</label>
                    <label htmlFor="Tecnologias">Javascript:</label>
                        <input type="checkbox" name="Javascript" id="" />
                    <label htmlFor="Tecnologias">React:</label>
                        <input type="checkbox" name="REACT" id="" />
                    <label htmlFor="Tecnologias">Redux:</label>
                        <input type="checkbox" name="REDUX" id="" />
                    <label htmlFor="Tecnologias">Express:</label>
                        <input type="checkbox" name="REDUX" id="" />
                    <label htmlFor="Tecnologias">Postgre:</label>
                        <input type="checkbox" name="REDUX" id="" />
                    {/* <label htmlFor="Tecnologias">Python:</label>
                        <input type="checkbox" name="PYTHON" id="" /> */}
                </div>
            </SlideWindow>
        </PrincipalWindow>
    )
}
