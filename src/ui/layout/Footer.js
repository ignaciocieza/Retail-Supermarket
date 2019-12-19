import React from 'react';
import './footer.styles.scss';

const Footer = () => (
    <section className="footer">
        <div className='subFooter'>
            <span className='title'>PRODUCTOS</span>
            <hr className='barra'></hr>
            <span className='subTitle'>Compre Junto</span>
            <span className='subTitle'>Kit Look</span>
            <span className='subTitle'>Completá tu compra</span>
            <span className='subTitle'>Shop the look</span>
            <span className='subTitle'>Sin Stock</span>
        </div>
        <div className='subFooter'>
            <span className='title'>MI CUENTA</span>
            <hr className='barra'></hr>
            <span className='subTitle'>Mis pedidos</span>
            <span className='subTitle'>Wishlist</span>
            <span className='subTitle'>Productos frecuentes</span>
            <span className='subTitle'>Mis listas</span>
            <span className='subTitle'>Mis recetas</span>
        </div>
        <div className='subFooter'>
            <span className='title'>CONTACTANOS</span>
            <hr className='barra'></hr>
            <span className='subTitle'>Nuestras sucursales</span>
            <span className='subTitle'>Horarios y telefonos</span>
        </div>
    </section>
);

export default Footer;