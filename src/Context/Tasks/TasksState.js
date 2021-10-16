import React, { useReducer } from 'react';
import TasksContext from "./TasksContext";
import {TasksReducer} from './TasksReducer';
import {TASK_PROJECT, ADD_TASK, DELETE_TASK, SELECT_EDIT_TASK, UPLOAD_TASK} from "../../Types/index";
import {clientAxios} from "../../Axios/index";
const TasksState = ({ children }) => {
    const initialState = {
        taskProject:[],
        taskEdit: null
    }
    const [state, dispatch] = useReducer(TasksReducer, initialState);
    //fxs
    const TaskinProject = async (project_id) => {
        try {
            const response = await clientAxios.get('/api/tasks/', {params: {project_id}});
            dispatch({
                type: TASK_PROJECT, payload: response.data.tasks
            })
        } catch (error) {
            console.log(error);
        }
    }
    const addTask = async (task) => {
        try {
            const response = await clientAxios.post('/api/tasks', task);
            dispatch({
                type: ADD_TASK, payload: response.data.task
            })
        } catch (error) {
            console.log(error);
        }
    }
    const deleteTask = async (id) => {
        try {
            await clientAxios.delete(`/api/tasks/${id}`);
            dispatch({
                type: DELETE_TASK, payload: id
            })
           } catch (error) {
              console.log(error) ;
           }
    }
    const selectEdit = (task) => {
        dispatch({
            type: SELECT_EDIT_TASK, payload: task
        })
    }
    const uploadTask = async(task) => {
        const response = await clientAxios.put(`api/tasks/${task._id}`, task);
        dispatch({
            type: UPLOAD_TASK, payload: response.data.existingTask
        })
    }
    return (
        <TasksContext.Provider value={{
            tasks: state.tasks,
            taskProject: state.taskProject,
            taskEdit: state.taskEdit,
            TaskinProject,
            addTask,
            deleteTask,
            selectEdit,
            uploadTask
        }}>
            {children}
        </TasksContext.Provider>
    )
}
export default TasksState;