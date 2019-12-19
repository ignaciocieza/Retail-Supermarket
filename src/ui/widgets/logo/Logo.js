import React from 'react';
import {Link} from 'react-router-dom';
import imagen from '../../../assets/crwn-192x192.png';
import './logo.styles.scss';

const Logo=()=>(
    <Link to='/' className="logo">
        <img src={imagen}  className="logo__type"/>
    </Link>    
);

export default Logo;