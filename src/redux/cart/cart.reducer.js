import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utiles';
const INITIAL_STATE = {
    hidden : true,
    cartItemes: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItemes: addItemToCart(state.cartItemes, action.payload)
            }
        default:
            return state;        
    }
}

export default CartReducer;