import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, 
    VALIDATE_FORM, PROJECT_SELECTED, DELETE_PROJECT} from '../../types';
//state
import { v4 as uuidv4 } from 'uuid';
const ProjectState = props => {
    const listProjects = [
        { id: 1, projectName: "programming the mern task" },
        { id: 2, projectName: "programming the portafolio" },
        { id: 3, projectName: "Lana" },
        { id: 4, projectName: "idk" }
    ]
    //state initial for de sidebar
    const initialState = {
        listProjects: [],
        newProject: false,
        projectSelected: null,
        errorForm : false
    }
    //dispatch
    const [state, dispatch] = useReducer(ProjectReducer, initialState);
    //functions for crud
    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }
    //fn to get projects
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: listProjects
        })
    }
    //Add new project
    const addProject = (project) => {
        project.id = uuidv4();
        dispatch({
            type: ADD_PROJECTS,
            payload: project
        })
    }
    const validateProject = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }
    //select project
    const selectProject = (projectSelected) => {
        dispatch({
            type: PROJECT_SELECTED,
            payload: projectSelected
        })
    }
    //delete a project
    const deleteProject = (projectSelected) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectSelected
        })
    }
    return (
        <ProjectContext.Provider value={{
            newProject: state.newProject,
            listProjects: state.listProjects,
            projectSelected: state.projectSelected,
            errorForm :state.errorForm,
            showForm,
            getProjects,
            addProject, 
            validateProject,
            selectProject,
            deleteProject
        }}>
            {props.children}
        </ProjectContext.Provider>
    )

}

export default ProjectState;