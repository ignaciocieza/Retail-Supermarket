import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { withRouter } from 'react-router-dom';
import { fetchAllProducts } from '../../../api/action/index';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';


class Directory extends React.Component {
    componentDidMount() {
        this.props.fetchAllProducts();
    }

    /**
     * Funcion que filtra y carga los productos 
     * Antes de retornar un JSX, 
     * se verifica el campo del store a mapear 
     */
    render() {
        let { checkFilterProducts, allProducts,searchValue, history } = this.props;
        let propsToRender = [];        
        
        if( history.location.pathname === '/search' ){ //&& searchValue.length, add para que se muestren todos los productos, en vez de espacio en blanco) 
            propsToRender=searchValue               
        }
        else if (checkFilterProducts && history.location.pathname === '/filters') {  //** checkFilterProducts.length -> reemplazar con este, en caso de querer la visibilidad*//       
            propsToRender = checkFilterProducts;
        } else {            
            propsToRender = allProducts;
        }
        return (
            <div className='directory__menu'>
                {propsToRender.map((item) => (
                    <MenuItem key={item.id} item={item} />
                ))}
            </div>
        );
    }
}
const mapStateToProps = estado => ({
    allProducts: estado.allProducts,
    checkFilterProducts: estado.checkFilterProducts,
    searchValue:estado.searchValue
})

const mapDispatchToProps = dispatch => ({
    fetchAllProducts: bindActionCreators(fetchAllProducts, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Directory));