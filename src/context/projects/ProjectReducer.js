import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECTS, 
    VALIDATE_FORM, PROJECT_SELECTED, DELETE_PROJECT} from '../../types';
const fn = (state, action) => {
    switch(action.type){
        case FORM_PROJECT:
            return {
                ...state, newProject : true
            }
        case GET_PROJECTS:
            return {
                ...state,
                listProjects: action.payload     
            }
        case ADD_PROJECTS: 
            return {
                ...state, 
                listProjects : [...state.listProjects, action.payload],
                newProject : false,
                errorForm : false
            }
        case VALIDATE_FORM:
            return{
                ...state, errorForm : true,
                newProject : true
            }
        case PROJECT_SELECTED:
            return{
                ...state,
                projectSelected: state.listProjects.filter(projectSelected => projectSelected.id === action.payload)
            }
        case DELETE_PROJECT:
            return{
                ...state,
                listProjects: state.listProjects.filter(projectSelected => projectSelected.id !==  action.payload),
                projectSelected: null
            } 
        default:
            return state;
    }
}
export default fn;