import React from 'react';
import {createStructuredSelector} from 'reselect';
import './checkout.styles.scss';
import {connect } from 'react-redux';
import {selectCartItems, selectCarTotal} from '../../redux/cart/cart.selectors'

const CheckOut = (cartItems,total) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <span className='header-block'>Product</span>
        </div>
        <div className='checkout-header'>
            <span className='header-block'>Description</span>
        </div>
        <div className='checkout-header'>
            <span className='header-block'>Quantity</span>
        </div>
        <div className='checkout-header'>
            <span className='header-block'>Price</span>
        </div>
        <div className='checkout-header'>
            <span className='header-block'>Total</span>
        </div>
        {
            cartItems.map(cartItem => 
                cartItem.Name
            )
        }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCarTotal
})

export default connect(mapStateToProps)(CheckOut);