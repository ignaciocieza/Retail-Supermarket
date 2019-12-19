import axios from 'axios';

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
} from './types';


export const fetchAllProducts =()=> async dispatch => {
    const response = await axios.get('http://remote.fizzmod.com/body.json');     

    dispatch({ 
        type: ALL_PRODUCTS,
        payload: response.data
    })
};

export const fetchMenuLinks=()=> async(dispatch)=>{
    const response = await axios.get('http://remote.fizzmod.com/menu.json');

    dispatch({
        type: MENU_LINKS,
        payload: response.data
    });
};

export const fetchBanners=()=>async(dispatch)=>{
    const response = await axios.get('http://remote.fizzmod.com/body.json');

    dispatch({
        type: ADD_BANNER,
        payload: response.data
    });
}

export const hiddenCart=()=>({type:CART_HIDDEN});

export const addItems=(item)=>({
    type:ADD_ITEMS,
    payload:item
})

export const clearItemFromCart=(item)=>({
    type:CLEAR_ITEM_FROM_CART,
    payload:item
})

export const removeItem=(item)=>({
    type:REMOVE_ITEM,
    payload:item
})

export const resetStore=()=>({type:RESET_STORE})

export const checkValue=(checked,valueCheck)=>{
    return({
        type:CHECK_VALUE,
        payload:{checked,valueCheck}
    })
}

export const searchValue=(searchValue)=>{
    return({
        type:SEARCH_VALUE,
        payload:searchValue
    })
}

export const setIndice=(indice)=>({
    type: SET_INDICE,
    payload: indice
})




