import { createStore , applyMiddleware , compose} from "redux";
import {persistStore} from 'redux-persist';
import reducer from './reducer.js'
import thunk from "redux-thunk";

/**
 * store, función que crea el store y une la función de los reducer,
 * junto con el middleware y thunk para solicitudes asincrónicas. 
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

/**
 * redux-persist, biblioteca que evita perder datos al actualizar la aplicacion.
 * Los pasos se detallan en: "reducer.js" y "src/index.js"
 */
export const persistor= persistStore(store);

