import { createSelector } from 'reselect';
import directorioImagenes from './directorioImagenes';

/**
 * Funcion que ayuda al reducer a filtrar los items del "listado-productos",
 * cuando se hace click sobre uno de sus items.
 * Asi puede determinar la cantidad de cada producto ("quantity")
 * "quantity" se inicializa con valor "1", la primera vez que es llamada la funcion.
 * @param {*lista de items presionados} cartItems 
 * @param {*item a comparar en "cartItems"} cartItemToAdd 
 */
export const addItemToCart = (cartItems, cartItemToAdd) => {
    //Busqueda de item repetido en la lista
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    //si existe se incrementa la cantidad
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }
    //si no se encuentra el item repetido, se inicializa la cantidad de este en "1"
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

/**
 * Funcion que busca el item en la lista,
 * si la encuentra y tiene cantidad = 1, entonces devuelve la lista sin "cartItemToRemove",
 * y si tiene una cantidad mayora a 1 entonces disminuye la cantidad.  
 * @param {*lista de items} cartItems 
 * @param {*item a remover} cartItemToRemove 
 */
export const removeItemFormCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
            cartItem.id === cartItemToRemove.id ?
                { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
    )
}
/**
 * Funcion que filtra por diferencia de precios,  
 * agregando el campo "discount" al array inicial de productos.
 * Además, busca la imagen en el "directorioImagenes" y 
 * la agrega al campo "image" del array original de productos
 * @param {array proveniente de la base de datos} allProducts 
 */
export const filterAllProducts = (allProducts) => {

    return allProducts.map(product => {
        let { sellingPrice, listPrice } = product.price;
        let discount = (sellingPrice < listPrice) ? ((sellingPrice*100)/(listPrice *-1) +100).toFixed(0) :false;
        
        let img = directorioImagenes.find(
            image => (image.name === `${product.image}`)
        )
        return (
            { ...product, discount: discount, image: img.imagen }
        )
    })
}
/**
 * Funcion que filtra la lista "allProducts", 
 * en relacion con los checkboxs, del "<AsideBar/>" del "Body.js"
 * @param {estado, del reducer} estado 
 * @param {*evento y value del checkbox} checkValues 
 */
export const filterCheckProducts = (estado, checkValues) => {
    let { allProducts, checkFilterProducts } = estado;
    let { checked, valueCheck } = checkValues;
    let aux = checkFilterProducts;

    //filtra "allProducts", dejando los que coniciden el "value" del producto
    //con el valor del checkbox
    checkFilterProducts = allProducts.filter(product => {
        let { attributes } = product;
        let finder = attributes.find(
            keyValue => (keyValue.value === valueCheck)
        );
        return finder;
    })

    //agregar los nuevos productos a "checkFilterProducts"
    if (aux.length && checked) {
        //uno los dos arrays en uno solo
        let nuevoArray = [...checkFilterProducts, ...aux]

        //filtro la lista y comparando los indices de los arrays que en sus campos no haya repetidos.
        let sinRepetidos = nuevoArray.filter((valorActual, indiceActual, arreglo) => {
            return arreglo.findIndex(
                valorDelArreglo => JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)
            ) === indiceActual
        });
        
        checkFilterProducts = sinRepetidos;

        return checkFilterProducts;
    }
    
    //saca los productos del checkFilterProducts 
    else if (checkFilterProducts && !checked) {
        //genero un nuevo array sin los valores que se pasaron en el evento
        checkFilterProducts = aux.filter(item => {
            let { attributes } = item
            let finder = attributes.find(
                keyValue => (keyValue.value === valueCheck)
            )
            return (!finder)
        })
        return checkFilterProducts;
    }

    return checkFilterProducts;
}

/**
 * Funcion que une los objetos recibidos de la base de dato, 
 * con las imagenes del "directorioImagenes"
 * @param {*action.payload.slides, contiene los slide de la base de datos} allBanners 
 */
export const linkerBannerImage = (allBanners) => {
    return allBanners.map(banner => {
        let img = directorioImagenes.find(
            image => (image.name === `${banner.imgName}`)
        )
        return (
            { ...banner, imgName: img.imagen }
        )
    })
}

/**
 * Funcion que usa "searchValues", 
 * para buscar productos por el titulo.
 * @param {valores provenientes del store} allProdcuts 
 * @param {*valores ingresados por el usuario} searchValues 
 */
export const filterSearchProducts = (allProdcuts, searchValues) => {
    return allProdcuts.filter(product => {
        return product.title.toLowerCase().indexOf(searchValues.toLowerCase()) !== -1
    })
}

//---------------------Selectores----------------------------------

export const selectCartItems = estado => estado.cartItems;

/**
 * "createSelector(1arg, 2arg): 
 * Funcion que memoriza la seleccion, 
 * evitando que los valores se filtren nuevamente por cada seleccion.
 * 1er arg, array de donde se toman valores, 
 * hace referencia a "selectCartItems",
 * para que filtre el campo a buscar del "estado".
 * 2do arg, funcion que devuelve valores,
 *  y calcula con "reduce", la cantidad de items que selecciono el usuario.  
 */
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity,
            0
        )
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) =>
                accumulatedQuantity + cartItem.quantity * cartItem.price.sellingPrice,
            0
        )
)


