import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {
    addItemToCart,
    filterAllProducts,
    removeItemFormCart,
    filterCheckProducts,
    linkerBannerImage,
    filterSearchProducts
} from './helperfunctions';
import {
    ALL_PRODUCTS,
    MENU_LINKS,
    CART_HIDDEN,
    ADD_ITEMS,
    CLEAR_ITEM_FROM_CART,
    REMOVE_ITEM,
    RESET_STORE,
    CHECK_VALUE,
    ADD_BANNER,
    SET_INDICE,
    SEARCH_VALUE
} from './action/types';

/**
 * obejeto, que contiene 'key-value' que indica
 * que indica lo que se debe conservar.
 * "root", lugar del reductor, donde se va a comenzar a guardar 
 * "storage", objeto proveniente de redux-persist/lib/storage
 * "whitelist", array que contiene el/los nombres de los reductores (en caso de usar "combineReducer"),
 * o de los campos de reductores que va a recargar del storage del obj "window"
 */
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cartItems']
}


const ESTADO_INICIAL = {
    allProducts: [],//vista principal, se carga imagen, descuento y texto 
    checkFilterProducts: [],//categorias de los filtros
    menuLinks: [],
    filtersLinks: [],
    hidden: true, //valor para mostar o esconder "cart-dropdown"(la vista de productos)
    cartItems: [],
    allBanners: [],
    indice: 0,
    searchValue: []
}

const reducer = (estado = ESTADO_INICIAL, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                ...estado,
                allProducts: filterAllProducts(action.payload.products),
                filtersLinks: action.payload.filters
            }
        case MENU_LINKS:
            return { ...estado, menuLinks: action.payload.menu.categories }
        case CART_HIDDEN:
            return { ...estado, hidden: !estado.hidden }
        case ADD_ITEMS:
            return {
                ...estado,
                cartItems: addItemToCart(estado.cartItems, action.payload)
            }
        case CLEAR_ITEM_FROM_CART:
            return {
                ...estado,
                cartItems: estado.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }
        case REMOVE_ITEM:
            return {
                ...estado,
                cartItems: removeItemFormCart(estado.cartItems, action.payload)
            }
        case RESET_STORE: //se usa para resetear "persist"  ("redux-persist") de "cartItems"
            return { ...estado, cartItems: [], checkFilterProducts: [] }
        case CHECK_VALUE:
            return {
                ...estado,
                checkFilterProducts: filterCheckProducts(estado, action.payload)
            }
        case ADD_BANNER:
            return {
                ...estado,
                allBanners: linkerBannerImage(action.payload.slides)
            }
        case SET_INDICE:
            return { ...estado, indice: action.payload }
        case SEARCH_VALUE:
            return { 
                ...estado, 
                searchValue: filterSearchProducts(estado.allProducts, action.payload) 
            }
        default:
            return estado;
    }
};

export default persistReducer(persistConfig, reducer);