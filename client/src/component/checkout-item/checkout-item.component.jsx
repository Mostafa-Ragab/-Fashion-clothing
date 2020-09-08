import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import {ClearItemFromCart, RemoveItem, addItem} from '../../redux/cart/cart.action';


const CheckOutItem = ({cartItem, ClearItem, addItem, RemoveItem }) => {
    const {imageUrl, name, price, quantity } = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src = {imageUrl} alt ='item'/>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
        <div className='arrow' onClick={() => RemoveItem(cartItem) }>&#10094;</div>
        <span className='valu'>{quantity}</span>
        <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div className='remove-button' onClick ={() => ClearItem(cartItem)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch => ({
    ClearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    RemoveItem: item => dispatch(RemoveItem(item))


})
export default connect(null,mapDispatchToProps)(CheckOutItem);