import React, { useReducer } from 'react';
import ProjectContext from "./ProjectContext";
import {ProjectReducer} from './ProjectReducer';
import { GET_PROJECTS, ADD_PROJECT, GET_ACTUAL_PROJECTS, DELETE_PROJECT,HIDE_PROJECTS } from "../../Types";
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
        dispatch({
            type: GET_PROJECTS, payload: response.data.projects
        })
    }
    const addProject = async (project) => {
        try {
            await clientAxios.post('./api/projects', project);
            getProjects();
        } catch (error) {
            console.log(error);
        }
    }
    const deleteProject = async(_id) => {
       try {
        await clientAxios.delete(`./api/projects/${_id}`);
        dispatch({
            type: DELETE_PROJECT, payload: _id
        });
       } catch (error) {
          console.log(error) ;
       }
    }
    const getActualProject = (_id) => {
        dispatch({
            type: GET_ACTUAL_PROJECTS, payload: _id
        })
    }
    const hideProjects = () => {
        dispatch({
            type: HIDE_PROJECTS
        })
    }
    return (
        <ProjectContext.Provider value={{
            projects: state.projects,
            actualProject: state.actualProject,
            getProjects,
            addProject,
            getActualProject,
            deleteProject,
            hideProjects
        }}>
            {children}
        </ProjectContext.Provider>
    )
}
export default ProjectState;