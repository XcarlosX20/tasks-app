import React, { useReducer } from 'react';
import ProjectContext from "./ProjectContext";
import {ProjectReducer} from './ProjectReducer';
import { GET_PROJECTS, ADD_PROJECT, GET_ACTUAL_PROJECTS, DELETE_PROJECT } from "../../Types";

const ProjectState = ({ children }) => {
    const projects = [
        {
            projectName: "MERN",
            id: 1
        },
        {
            projectName: "JAM",
            id: 2
        },
        {
            projectName: "LAMP",
            id: 3
        }
    ]
    const initialState = {
        projects: [],
        actualProject: null
    }
    const [state, dispatch] = useReducer(ProjectReducer, initialState);
    //fxs
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS, payload: projects
        })
    }
    const addProject = (project) => {
        dispatch({
            type: ADD_PROJECT, payload: project
        })
    }
    const deleteProject = (id) => {
        dispatch({
            type: DELETE_PROJECT, payload: id
        })
    }
    const getActualProject = (id) => {
        dispatch({
            type: GET_ACTUAL_PROJECTS, payload: id
        })
    }
    return (
        <ProjectContext.Provider value={{
            projects: state.projects,
            actualProject: state.actualProject,
            getProjects,
            addProject,
            getActualProject,
            deleteProject
        }}>
            {children}
        </ProjectContext.Provider>
    )
}
export default ProjectState;