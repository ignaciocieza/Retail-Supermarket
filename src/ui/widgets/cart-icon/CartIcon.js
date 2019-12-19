import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import './cartIcon.styles.scss';

/**
 * Icon de carrito, que en su interior muestra la cantidad seleccionada
 * @param {*cantidad total de productos seleccionados} accumulatedQuantity 
 */
const CartIcon = ({accumulatedQuantity}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{accumulatedQuantity}</span>
    </div>
);


export default CartIcon;