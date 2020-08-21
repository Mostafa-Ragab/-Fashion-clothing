import React from 'react';
import {createStructuredSelector} from 'reselect';
import './checkout.styles.scss';
import {connect } from 'react-redux';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckOutItem from '../../component/checkout-item/checkout-item.component';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>TOTAL: ${total}</div>
      <div className='test-warning'>
        *please yous the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 - Exp:01/20 -   CVV: 123
      </div>
      <StripeCheckout className='button' price={total} />

    </div>
  );

  
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total : selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);