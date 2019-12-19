import React from 'react';
import './navegador.styles.scss';

/**
 * funcion que carga del store, "menuLinks", 
 * los links para el "Navegador"
 * @param {*Links del Navegador} param0 
 */
const Navegador = ({ menuLinks }) => (
    <nav className='navegador'>
        {menuLinks.map(link => {
            return (
                <a href={link.href} key={link.title}>{link.title.toUpperCase()}</a>
            )
        })}
    </nav>
);

export default Navegador;