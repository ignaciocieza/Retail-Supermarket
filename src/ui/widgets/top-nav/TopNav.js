import React from 'react';
import { Link } from 'react-router-dom';
import './topNav.styles.scss';

/**
 * Funcion que contiene los links de "TopNav"
 */
const TopNav = () => (
    <div className='topnav'>
        <Link to='/' className='navLink'>Ayuda</Link>
        <Link to='/shop' className='navLink'>Mis pedidos </Link>
        <Link to='/' className='navLink'>Mi cuenta</Link>
    </div>
);

export default TopNav;
