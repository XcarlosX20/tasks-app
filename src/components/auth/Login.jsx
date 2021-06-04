import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
    const [user, setUser] = useState({
        email: "", password: ""
    })
    const { email, password } = user;
    const handleChange = (e) => {
        setUser({
            ...user, [e.target.name]: e.target.value
        });
    };
    const onSubmit = () => {
        //
    }
    return (
        <Fragment>
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark">
                    <h1>Log in</h1>
                    <form onSubmit={onSubmit}>
                        <div className="campo-form">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                name="email"
                                id="email"
                                placeholder="your Email"
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
                            <input type="submit"
                                className="btn btn-block btn-primario"
                                value="Log in" />
                        </div>
                    </form>
                    <Link to={"/newaccount"} className="enlace-cuenta">create my account?</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;