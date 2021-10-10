import { useReducer } from "react";
import { SHOW_ALERT, HIDE_ALERT } from "../../Types";
import alertContext from "./AlertContext";
import AlertReducer from "./AlertReducer";

const AlertState = props =>{
        const initialState = {
            alert: null
        }
    
        const [state, dispatch] = useReducer(AlertReducer, initialState);
        const showAlert = (msg, category) => {
          dispatch({
              type: SHOW_ALERT, 
              payload: {
                  msg, category
              }
          });
          setTimeout(()=>{
            dispatch({
                type: HIDE_ALERT 
            });
          },3000);
        }
    return(
        <alertContext.Provider
        value={{
            alert: state.alert,
            showAlert
        }}>
            {props.children}
        </alertContext.Provider>
    )
}
export default AlertState;