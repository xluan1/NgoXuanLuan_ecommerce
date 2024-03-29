import * as actionTypes from './shopping-types';

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    };
};

export const deleteToCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    };
};

export const adjustQty = (itemId, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemId,
            qty: value
        }
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: item
    };
};