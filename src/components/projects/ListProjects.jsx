import React, { useContext, useEffect } from 'react';
import Project from './Project';
import ProjectContext from '../../context/projects/ProjectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const ListProjects = () => {
    const projectContex = useContext(ProjectContext);
    const { listProjects, getProjects } = projectContex;
    let alert = <h4>you have no projects to select. Create one!</h4>;
    useEffect(() => {
        getProjects();
    }, []);
    if (listProjects.length === 0) return alert;
    return (
        <ul className="listado-projectos">
            <TransitionGroup>
                {listProjects.map(project => (
                    <CSSTransition key={project.id}
                    classNames="proyecto"
                    timeout={200}>
                    <Project
                        project={project} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
}

export default ListProjects;