import React from 'react';

const Navbar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <h4 className="navbar-brand">New Run</h4>
                    <div className="navbar-nav ml-auto">
                        <button className="btn btn-outline-light mr-2" onClick={() => window.location.href = "vacio"}>Miembros Inferiores</button>
                        <button className="btn btn-outline-light mr-2" onClick={() => window.location.href = "vacio"}>Miembros superiores</button>
                        <button className="btn btn-outline-light mr-2" onClick={() => window.location.href = "vacio"}>Accesorios y Componentes</button>
                        <button className="btn btn-outline-light" onClick={() => window.location.href = "vacio"}>Contacto</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
