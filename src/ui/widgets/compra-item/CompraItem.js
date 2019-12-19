import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
    addItems,
    clearItemFromCart,
    removeItem
} from '../../../api/action/index';
import './compraItem.styles.scss';

/**
 * Funcion que muestra el item de la pagina de "compraProducto".
 * &#10094, simbolo de utf-8 para caracteres especiales.
 * @param {*parametros provenientes de "connect"} param0 
 */
const CompraItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { title, image, price, quantity } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={image} alt='no item' />
            </div>
            <span className='name'>{title.toUpperCase()}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItem(cartItem)}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>$ {price.sellingPrice}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>
                &#10005;
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearItem: bindActionCreators(clearItemFromCart,dispatch),
    addItem: bindActionCreators(addItems,dispatch),
    removeItem: bindActionCreators(removeItem,dispatch)
});

export default connect(null,mapDispatchToProps)(CompraItem);
