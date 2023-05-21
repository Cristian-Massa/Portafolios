import React, { useEffect } from "react";
import { PrincipalWindow } from "../generalStyles";
import { useSelector } from "react-redux";
import { idGenerator } from "../../function/idGenerator";
import { useState } from "react";
import { Text, SubTitle, GeneralLink, SlideWindow } from "../generalStyles";
import { useDispatch } from "react-redux";
import { toggleProjects } from "../../redux/actions/actions";
import styled from "styled-components";

const MidCard = styled.div`
position: relative;
left: 10%;
`


export const Projects = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const [check, setCheck] = useState('#Exercise')
    const [projectsOrExercise, setProjectsOrExercise] = useState(state.projects)
    const ProjectId = idGenerator()
    let i = 0

    const handleClick = (e) => {
        setCheck(e.target.value);
      };
      
      useEffect(() => {
        console.log(check);
      
        if (check === "Project") {
          const projects = state.projects.filter(element =>
            element.description.includes("#Project")
          );
          setProjectsOrExercise(projects);
          console.log(projectsOrExercise);
        } else if (check === "Exercise") {
          const exercises = state.projects.filter(element =>
            element.description.includes("#Exercise")
          );
          setProjectsOrExercise(exercises);
          console.log(projectsOrExercise);
        } else {
          const showAll = state.projects.filter(element => element);
          setProjectsOrExercise(showAll);
          console.log(projectsOrExercise);
        }
      
        dispatch(toggleProjects(check));
      }, [check]);
      

    return (
        <PrincipalWindow>
            <MidCard>
                <label htmlFor="opcion"><Text>Proyectos:</Text></label>
                    <input type="radio" name="opcion" value="Project" onClick={handleClick} />
                <label htmlFor="opcion"><Text>Ejercicios:</Text></label>
                    <input type="radio" name="opcion" value="Exercise" onClick={handleClick} />
                <label htmlFor="opcion"><Text>Mostrar todo:</Text></label>
                    <input type="radio" name="opcion" value="ShowAll" onClick={handleClick} />
            </MidCard>
            <div style={{ gridTemplateColumns: "auto", padding: "30px" }}>
                {
                    projectsOrExercise.map(element => (
                        <div>
                            <SubTitle><GeneralLink href={element.html_url} target="_blank">{`${element.name}`}</GeneralLink></SubTitle>
                            <Text>{`${element.language}`}</Text>
                            <Text>{`${element.description}`}</Text>
                        </div>
                    ))
                }
            </div>
        </PrincipalWindow>
    )
}
