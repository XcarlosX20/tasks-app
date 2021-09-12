import { GET_PROJECTS, ADD_PROJECT, GET_ACTUAL_PROJECTS, DELETE_PROJECT } from "../../Types";
export const ProjectReducer = (state, action) => {
    switch(action.type){
        case GET_PROJECTS: 
            return{
                ...state, projects: action.payload
            }
        case ADD_PROJECT:
            return{
                ...state, projects: [...state.projects, action.payload]
            }
        case DELETE_PROJECT:
            return{
                ...state, projects: state.projects.filter(project=> project.id !== action.payload),
                actualProject: null
            }
        case GET_ACTUAL_PROJECTS:
            return{
                ...state, actualProject: state.projects.filter(project=> project.id === action.payload)
            }
        default:
            return state;
    }
}