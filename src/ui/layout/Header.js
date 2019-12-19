import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Navegador from "../widgets/navegador/Navegador";
import TopNav from '../widgets/top-nav/TopNav';
import Buscador from '../widgets/buscador/Buscador';
import Logo from '../widgets/logo/Logo';
import CartDropDown from '../widgets/cart-dropdown/CartDropDown';
import { fetchMenuLinks } from '../../api/action/index';
import './header.styles.scss';


class Header extends React.Component {

    componentDidMount() {
        this.props.fetchMenuLinks();
    }

    render() {
        return (
            <React.Fragment>
                <div className='header'>
                    <Logo />
                    <div className='subHeader'>
                        <TopNav />
                        <Buscador />
                        {this.props.hidden ? null : <CartDropDown />}
                    </div>
                </div>
                <Navegador menuLinks={this.props.menuLinks} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (estado) => ({
    hidden: estado.hidden,
    menuLinks: estado.menuLinks
})

const mapDispatchToProps = dispatch => ({
    fetchMenuLinks: bindActionCreators(fetchMenuLinks, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);


