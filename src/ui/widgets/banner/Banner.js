import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import { fetchBanners, setIndice } from '../../../api/action/index';

class Banner extends React.Component {
    componentDidMount() {
        this.props.fetchBanners();
    }
    /**
     * Biblioteca 'react-gesture-gallery', para generar banners
     * Gallery:
     * index, indice de la imagen que se va a mostrar
     * onRequestChange, devuelve un nuevo indice al tocar el boton, sobre la imagen
     */
    render() {
        return (
            <Gallery
                index={this.props.indice}
                onRequestChange={i => {
                    this.props.setIndice(i)
                }}
            >
                {this.props.allBanners.map(image => (
                    <GalleryImage key={image.href} src={image.imgName} />
                ))}
            </Gallery>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBanners: bindActionCreators(fetchBanners, dispatch),
    setIndice: bindActionCreators(setIndice, dispatch)
})

const mapStateToProps = (estado) => ({
    allBanners: estado.allBanners,
    indice: estado.indice
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);