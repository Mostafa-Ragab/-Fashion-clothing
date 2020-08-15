import { createSelector } from 'reselect';


const selectorCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectorCart],
    cart => cart.hidden
);

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

export const selectCarTotal = createSelector (
    [selectorCart],
    cartItems => cartItems.reduce(
        (accumalatedQuantity,cartItems ) => 
            accumalatedQuantity + cartItems.quantity * cartItems.price,0 
    )

);