import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import tw from "twin.macro";
import styled from "styled-components";

export const Projects = () => {
    const projects = useSelector(store => store.projects);
    const [showed, setShowed] = useState();

    const filterProjects = (e) => {
        if (e.target.value === "Project") {
            setShowed(projects.filter(element => element.description.includes('#Project')));
        }
        if (e.target.value === "Exercise") {
            setShowed(projects.filter(element => element.description.includes('#Exercise')));
        }
        if (e.target.value === "ShowAll") {
            setShowed(projects);
        }
    };
    useEffect(() => {
        setShowed(projects)
    }, [projects])
    return (
        <section id="Project">
            <article>
                <div>
                    <h2>Mis Proyectos</h2>
                    <p>Aca podras revisar informacion sobre mis proyectos como el lenguaje el nombre y podras ir directamente al repositorio</p>
                </div>
                <SelectorDisplay>
                    <label htmlFor="opcion"><h2>Selecciona lo que quieras ver</h2></label>
                    <select onChange={filterProjects}>
                        <option value="ShowAll">Mostrar todo</option>
                        <option value="Exercise">Solo proyectos</option>
                        <option value="Project">Solo ejercicios</option>
                    </select>
                </SelectorDisplay>
                <ProjectsList>

                    {
                        showed?.map(element => (
                            <div>
                                <h2><CustomLink href={element.html_url} target="_blank">{`${element.name}`}</CustomLink></h2>
                                <p>{`${element.language}`}</p>
                                <p>{`${element.description}`}</p>
                            </div>
                        ))
                    }
                </ProjectsList>
            </article>
        </section>
    )
}

const CustomLink = styled.a`
    ${tw`
        hover:text-amber-500 
        transition duration-200 ease-in-out
        `
    }
`
const SelectorDisplay = styled.div`
    ${tw`
        gap-3
        justify-center
        m-10
    `}
`
const ProjectsList = styled.div`
    ${tw`
        md:grid
        md:grid-cols-2
    `}
`