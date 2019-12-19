import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CompraItem from '../../widgets/compra-item/CompraItem';
import { selectCartItems, selectCartTotal } from '../../../api/helperfunctions';
import './compraProducto.styles.scss';

const CompraProducto = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span >Producto</span>
            </div>
            <div className='header-block'>
                <span >Descripción</span>
            </div>
            <div className='header-block'>
                <span >Cantidad</span>
            </div>
            <div className='header-block'>
                <span >Precio</span>
            </div>
            <div className='header-block'>
                <span>Eliminar</span>
            </div>
        </div>
        {cartItems.map(cartItem => (
            <CompraItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <div className='total'>TOTAL: ${total}</div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal

})

export default connect(mapStateToProps, null)(CompraProducto);