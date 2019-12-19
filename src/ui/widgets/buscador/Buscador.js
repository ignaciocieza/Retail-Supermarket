import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { hiddenCart, searchValue } from '../../../api/action/index';
import { bindActionCreators } from "redux";
import { selectCartItemsCount } from '../../../api/helperfunctions';
import CartIcon from '../cart-icon/CartIcon';
import { ReactComponent as BusquedaIcon } from '../../../assets/busqueda.svg';
import './buscador.styles.scss';

const Buscador = ({ hiddenCart, itemCount,searchValue, history }) => (
    <div className='buscador' >
        <div className='buscador__div'>
            <BusquedaIcon className='buscador__div-icon' />
            <input
                className='buscador__div-input'
                placeholder='Buscar un producto...'
                onChange={(e)=>{
                    searchValue(e.target.value.substr(0,20))
                    history.push('/search')
                }}
            />
        </div>
        <div className='buscador__button' onClick={hiddenCart}>
            <CartIcon accumulatedQuantity={itemCount} />
            <span className='buscadorButtonTitulo'>MI CARRITO</span>
        </div>
    </div>
);

const mapDispatchToProps = dispatch => ({
    hiddenCart: bindActionCreators(hiddenCart, dispatch),
    searchValue: bindActionCreators(searchValue, dispatch)
});

const mapStateToProps = estado => ({
    itemCount: selectCartItemsCount(estado)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Buscador));
