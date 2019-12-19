import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../../api/helperfunctions';
import { createStructuredSelector } from 'reselect';
import { hiddenCart } from '../../../api/action/index';
import { bindActionCreators } from "redux";
import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';
import './cartDropDown.styles.scss';

/**
 * withRouter, se usa para agregar a un evento la redireccion de la pagina.
 * CartDropDown, despliega una lista cuando se seleccionan productos
 */
const CartDropDown = ({ cartItems, history, hiddenCart }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            ) : (
                    <span className='empty-message'>CARRITO VACIO</span>
                )}
        </div>
        <CustomButton onClick={() => {
            history.push('/shop');
            hiddenCart()
        }}
        >
            CONFIRMAR COMPRA
        </CustomButton>
    </div>
)

/**
 * "createStructuredSelector", conexión con "helperfunction" -> selectores. 
 * Estos selectores evitan que las funciones de filtro se usen innecesariamente,
 * obteninedose mayor performance. 
 */
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

const mapDispatchToProps = dispatch => ({
    hiddenCart: bindActionCreators(hiddenCart, dispatch)
})

/**
 * "withRouter", obtiene, del componente actual, el match de "history" y "location",
 * y lo pasa como "props"
 */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropDown));