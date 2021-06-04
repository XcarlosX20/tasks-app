import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
    const [user, setUser] = useState({
        userName: "", email: "", password: "", passConfirm: ""
    })
    const { email, password, userName, passConfirm } = user;
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    };
    const onSubmit = () => {
        
    }
    return ( 
        <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Create my account</h1>
                    <form onSubmit={onSubmit}>
                    <div className="campo-form">
                            <label htmlFor="email">Name:</label>
                            <input type="text"
                                name="userName"
                                id="userName"
                                placeholder="your name"
                                value={userName}
                                onChange={handleChange} />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                name="email"
                                id="email"
                                placeholder="your email"
                                value={email}
                                onChange={handleChange} />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                value={password}
                                name="password"
                                id="password"
                                placeholder="your password"
                                onChange={handleChange} />
                        </div>
                        <div className="campo-form">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                value={passConfirm}
                                name="passConfirm"
                                id="passConfirm"
                                placeholder="repeat the password"
                                onChange={handleChange} />
                        </div>
                        <div className="campo-form">
                            <input type="submit"
                                className="btn btn-block btn-primario"
                                value="Log in" />
                        </div>
                    </form>
                    <Link to={"/login"} className="enlace-cuenta">log In</Link>
                </div>
            </div>
    
        );
}
 
export default NewAccount;