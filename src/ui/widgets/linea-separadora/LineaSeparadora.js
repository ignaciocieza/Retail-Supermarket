import React from 'react';
import './lineaSeparadora.styles.scss';

const LineaSeparadora = () => (
    <div className='lineaSeparadora'>
        <hr className="lineaSeparadora__linea"></hr>
        <span className="lineaSeparadora__titulo">Productos</span>
        <hr className="lineaSeparadora__linea"></hr>
    </div>
);

export default LineaSeparadora;