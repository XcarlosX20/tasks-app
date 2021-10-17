import { GET_PROJECTS, GET_ACTUAL_PROJECTS, DELETE_PROJECT, HIDE_PROJECTS } from "../../Types";
export const ProjectReducer = (state, action) => {
    switch(action.type){
        case GET_PROJECTS: 
            return{
                ...state, projects: action.payload
            }
        case DELETE_PROJECT:
            return{
                ...state, projects: state.projects.filter(project=> project._id !== action.payload),
                actualProject: null
            }
        case GET_ACTUAL_PROJECTS:
            return{
                ...state, actualProject: state.projects.filter(project=> project._id === action.payload)
            }
        case HIDE_PROJECTS:
            return{
                projects: [],
                actualProject: null
            }
        default:
            return state;
    }
}