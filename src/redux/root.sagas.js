import {all, call } from 'redux-saga/effects';
import {fetchCollectionStart } from './shop/shop.sagas';
import {userSagas } from './user/user.sagas';
import {cartSaga} from './cart/cart.sagas';
export default function* rootSaga() {
    all([
      yield all([call(fetchCollectionStart), call(userSagas), call(cartSaga)]) 
    ])
};
