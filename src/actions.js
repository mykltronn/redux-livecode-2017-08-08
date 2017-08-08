export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_QTY = 'UPDATE_QTY';
export const CLEAR_CART = 'CLEAR_CART';

export const addItem = function (itemId) {
  return {
    type: ADD_ITEM,
    payload: itemId
  }
}

export const updateQty = function ({id, qty}) {
  return {
    type: UPDATE_QTY,
    payload: {
      id: id,
      qty: qty
    }
  }
}

export const clearCart = function () {
  return {
    type: CLEAR_CART
  }
}
