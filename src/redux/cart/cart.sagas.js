import {takeLatest , put, all, call } from 'redux-saga/effects';

import CartActionTypes from './cart.types';
import { clearCart } from './cart.action';
import UserActionTypes from '../user/user.types';
export function* clearCartOnSignOut() {
    yield put(clearCart())
}

export function* OnsignOutSuccess () {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSaga() {
    yield all([call(OnsignOutSuccess)]);
};
