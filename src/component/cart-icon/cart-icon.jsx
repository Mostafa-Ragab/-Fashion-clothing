import React from 'react';

import {ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.action';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors';


const CartIcon = ({toggleCartHidden, itemCart}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCart}</span>
    </div>
)


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
  });

  const mapStateToProps = state => ({
      itemCart: selectCartItemsCount(state)
  })
export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartIcon);