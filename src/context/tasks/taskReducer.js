import {
    TASKS_PROJECT, ADD_TASK, DELETE_TASK, ACTUAL_TASK,
    CHANGE_STATE_TASK, EDIT_TASK
} from '../../types/';
export default (state, action) => {
    switch (action.type) {
        case TASKS_PROJECT:
            return {
                ...state,
                taskProject: state.tasks.filter(task => task.id === action.payload)
            }
        case ADD_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.idTask !== action.payload)
            }
        case ACTUAL_TASK:
            return {
                ...state,
                taskSelected: action.payload
            }
        case EDIT_TASK:
        case CHANGE_STATE_TASK:
            return {
                ...state,
                task: state.tasks.map(task => task.idTask === action.payload.idTask ?
                    action.payload : task)
            }
        default:
            return state;
    }
}
