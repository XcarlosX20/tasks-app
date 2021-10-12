import {TASK_PROJECT, ADD_TASK, DELETE_TASK, SET_STATE_TASK, SELECT_EDIT_TASK, UPLOAD_TASK} from "../../Types/index";
export const TasksReducer = (state, action) => {
    switch (action.type) {
        case TASK_PROJECT:
            return{
                ...state, taskProject: action.payload
            }
        case ADD_TASK:
            return{
                ...state, tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK:
            return{
                ...state, tasks: state.tasks.filter(task=> task.task_id !== action.payload)
            }
        case SET_STATE_TASK:
        case UPLOAD_TASK: 
            return{
                ...state, tasks: state.tasks.map(task=> task.task_id === action.payload.task_id ? action.payload : task)
            }
        case SELECT_EDIT_TASK:
            return{
                ...state, taskEdit: action.payload
            }
            default:
                return state;
    }
}