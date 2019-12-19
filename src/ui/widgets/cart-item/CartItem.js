import React from 'react';
import './cartItem.styles.scss';

/**
 * Item que se muestra en CartDropDown
 * @param {*procucto selecionado} item 
 */
const CartItem = ({ item: { image, price, title, quantity } }) => (
    <div className='cart-item'>
        <img src={image} alt='no item' />
        <div className='item-details'>
            <span className='name'>{title.toUpperCase()}</span>
            <span className='price'>
                {quantity} X $ {price.sellingPrice}
            </span>
        </div>
    </div>
);

export default CartItem;