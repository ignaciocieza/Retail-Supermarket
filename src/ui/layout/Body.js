import React from 'react';
import { connect } from 'react-redux';
import ListadoProductos from '../paginas/listado-productos/ListadoProductos';
import LineaSeparadora from '../widgets/linea-separadora/LineaSeparadora';
import AsideBar from '../widgets/aside-bar/AsideBar';
import Banner from '../widgets/banner/Banner';
import './body.styles.scss';


const Body = ({ filtersLinks }) => (
    <React.Fragment>
        <Banner />
        <LineaSeparadora />
        <div className='body'>          
            <div className='body__filters'>
                {
                    filtersLinks.map(link => <AsideBar key={link.field} {...link} />)
                }
            </div>
            <ListadoProductos />
        </div>
        
    </React.Fragment>
);

const mapStateToProps = (estado) => ({
    filtersLinks: estado.filtersLinks
})

export default connect(mapStateToProps, null)(Body);