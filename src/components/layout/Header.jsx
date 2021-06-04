import React from 'react';
const Header = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Hello, <span>Carlos</span></p>
            <nav className="nav-principal">
                <a href="#!">Sign Off</a>
            </nav>
        </header>
     );
}
 
export default Header;