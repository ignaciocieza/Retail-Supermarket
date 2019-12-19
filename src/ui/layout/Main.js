import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Body from './Body';
import CompraProducto from '../paginas/compra-producto/CompraProducto';

/**
 * Funcion que contiene las rutas
 */
export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Body} />
                <Route path='/search' exact component={Body} />
                <Route path='/filters' exact component={Body} />
                <Route path='/shop' exact component={CompraProducto} />
            </Switch>
        )
    }
}
