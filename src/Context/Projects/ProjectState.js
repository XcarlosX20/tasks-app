import React, { useReducer } from 'react';
import ProjectContext from "./ProjectContext";
import {ProjectReducer} from './ProjectReducer';
import { GET_PROJECTS, ADD_PROJECT, GET_ACTUAL_PROJECTS, DELETE_PROJECT } from "../../Types";
import {clientAxios} from "../../Axios/index";
const ProjectState = ({ children }) => {
    const initialState = {
        projects: [],
        actualProject: null
    }
    const [state, dispatch] = useReducer(ProjectReducer, initialState);
    //fxs
    const getProjects = async() => {
        
            const response = await clientAxios.get('/api/projects');
        //console.log(response.data.projects);
        dispatch({
            type: GET_PROJECTS, payload: response.data.projects
        })
    }
    const addProject = async (project) => {
        try {
            const response = await clientAxios.post('./api/projects', project);
            console.log(response);
            dispatch({
                type: ADD_PROJECT, payload: project
            });
        } catch (error) {
            console.log(error);
        }
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