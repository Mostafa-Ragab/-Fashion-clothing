import { createSelector } from 'reselect';


const selectorCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectorCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity,cartItems ) => 
            accumalatedQuantity + cartItems.quantity,0
    )
)