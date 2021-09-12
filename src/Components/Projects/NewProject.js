import React, { useState, useContext} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectContext from '../../Context/Projects/ProjectContext';
const NewProject = () => {
    const [newProject, setNewProject] = useState({projectName: ""})
    const [openForm, setOpenForm] = useState(false);
    const { addProject } = useContext(ProjectContext)
    
    const onSubmit = async (e) => {
        e.preventDefault();
        if(newProject.projectName === ""){
            return
        }else{
            newProject.id = uuidv4();
            await addProject(newProject);
            setOpenForm(false)
            setNewProject({projectName: ""});
        }
    }
    const handleInput = (e) => {
        setNewProject({projectName: e.target.value});
    }
    return (
        <>
            <button
                type="button"
                className="btn btn-block btn-primary"
                onClick={()=>setOpenForm(true)}>New Project
                
            </button>
            {
                openForm ? (
                    <form className="form-new-project" onSubmit={onSubmit}>
                        <input type="text"
                            className="input-text"
                            placeholder="Project name"
                            name="projectName"
                            value={newProject.projectName}
                            onChange={handleInput}
                            required
                        />
                        <input type="submit"
                            className="btn btn-primary btn-block"
                            value="Add project" />

                    </form>
                )
                    : null
            }

        </>
    );
}

export default NewProject;