import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItems} from '../../../api/action/index';
import CustomButton from '../custom-button/CustomButton';
import './menuItem.styles.scss';

/**
 * Funcion que muestra cada items,
 *  de la lista de productos
 * 
 */
const MenuItem = ({ item, addItems }) => {

    let { image, title, price, discount, href } = item;

    return (
        <div className={`menu-item`} >
            {/* {discount ? <img alt='desc' className='descuento-image' src={descuento} /> : ""} */}
            {discount ? <div className='circulo'>-{discount}%</div> : ""}
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${image})` 
                }}
            />
            <div className='content'>
                <a href={href} className='title'>
                    {title.toUpperCase()}
                </a>
                {discount ? <span className='subtitleOne'>$ {price.listPrice}</span> : ""}
                <span className='subtitleTwo'>$ {price.sellingPrice}</span>
            </div>
            <CustomButton onClick={() => addItems(item)} inverted>Comprar</CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItems: bindActionCreators(addItems, dispatch),
})

export default connect(null, mapDispatchToProps)(MenuItem);