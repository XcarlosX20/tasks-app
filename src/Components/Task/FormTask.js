import React from 'react';
const FormTask = () => {
    return ( 
        <div className="form">
            <form>
                <div className="container-input">
                    <input type="text" 
                     className="input-text"
                     placeholder="Type the task..."/>
                </div>
                <div className="container-input">
                    <input type="submit" 
                     className="btn btn-primary btn-submit btn-block"
                     value="add task"/>
                </div>
            </form>
        </div>
     );
}
 
export default FormTask;