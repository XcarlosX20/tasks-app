import {TASK_PROJECT, ADD_TASK, DELETE_TASK, SELECT_EDIT_TASK, UPLOAD_TASK} from "../../Types/index";
export const TasksReducer = (state, action) => {
    switch (action.type) {
        case TASK_PROJECT:
            return{
                ...state, taskProject: action.payload
            }
        case ADD_TASK:
            return{
                ...state, taskProject: [action.payload, ...state.taskProject]
            }
        case DELETE_TASK:
            return{
                ...state, taskProject: state.taskProject.filter(task=> task._id !== action.payload)
            }
        case UPLOAD_TASK: 
            return{
                ...state, taskProject: state.taskProject.map(task=> task._id === action.payload._id ? action.payload : task)
            }
        case SELECT_EDIT_TASK:
            return{
                ...state, taskEdit: action.payload
            }
            default:
                return state;
    }
}