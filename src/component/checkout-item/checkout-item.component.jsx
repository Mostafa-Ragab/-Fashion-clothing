import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {ClearItemFromCart} from '../../redux/cart/cart.action';


const CheckOutItem = ({cartItem, ClearItem}) => {
    const {imageUrl, name, price, quantity } = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src = {imageUrl} alt ='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{price}</span>
        <span className='price'>{quantity}</span>
        <div className='remove-button' onClick ={() => ClearItem(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    ClearItem: item => dispatch(ClearItemFromCart(item))
})
export default connect(null,mapDispatchToProps)(CheckOutItem);