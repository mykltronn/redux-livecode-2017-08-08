import {ADD_ITEM, UPDATE_QTY, CLEAR_CART} from "./actions";
import update from 'immutability-helper';

export const initialState = {
    availableItems: [
        {
            id: 1,
            title: "Stuffed Frog",
            price: 2.00
        }, {
            id: 2,
            title: "Stuffed Orca",
            price: 10.00
        }, {
            id: 3,
            title: "Stuffed Lammergeier",
            price: 12.00
        }
    ],
    cart: {}
};

const reducer = function(state=initialState, action) {
    switch (action.type) {
        case ADD_ITEM:
            return update(state, {
                cart: {
                    [action.payload]: {
                        $set: 1
                    }
                }
            });
        case UPDATE_QTY:
            return update(state, {
                cart: {
                    [action.payload.id]: {
                        $set: action.payload.qty
                    }
                }
            });
        case CLEAR_CART:
            return update(state, {
                cart: {
                    $set: {}
                }
            });
        default:
            return state;
    }
}

export default reducer;
