import React, { useReducer } from 'react';
import TasksContext from "./TasksContext";
import {TasksReducer} from './TasksReducer';
import {TASK_PROJECT, ADD_TASK, DELETE_TASK, SET_STATE_TASK, SELECT_EDIT_TASK, UPLOAD_TASK} from "../../Types/index";
import {clientAxios} from "../../Axios/index";
const TasksState = ({ children }) => {
    const initialState = {
        tasks: [],
        taskProject:null,
        taskEdit: null
    }
    const [state, dispatch] = useReducer(TasksReducer, initialState);
    //fxs
    const TaskinProject = async (_id) => {
        try {
            const response = await clientAxios.get('/api/tasks/');
            console.log(response.data);
            dispatch({
                type: TASK_PROJECT, payload: _id
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
    const deleteTask = async (_id) => {
        try {
            await clientAxios.delete(`./api/tasks/${_id}`);
            dispatch({
                type: DELETE_TASK, payload: _id
            })
           } catch (error) {
              console.log(error) ;
           }
    }
    const setStateTask = (task) => {
        dispatch({
            type: SET_STATE_TASK, payload: task
        })
    }
    const selectEdit = (task) => {
        dispatch({
            type: SELECT_EDIT_TASK, payload: task
        })
    }
    const uploadTask = (task) => {
        dispatch({
            type: UPLOAD_TASK, payload: task
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
            setStateTask,
            selectEdit,
            uploadTask
        }}>
            {children}
        </TasksContext.Provider>
    )
}
export default TasksState;