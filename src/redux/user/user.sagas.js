import {takeLatest, put, all, call } from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {auth , googleProvider, createUserProfileDocument,getCurrentUser  } from '../../component/firebase/firebase.utiles'
import { SignInSuccess, SignInFailure,signOutSuccess,signOutFailure } from './user.action';
export function* getSnapshotFromUserAuth(userAuth) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapShot = yield userRef.get();
        yield put (
            SignInSuccess({id: userSnapShot.id, ...userSnapShot.data()})
        )
    } catch (error) {
        yield put (
            SignInFailure(error)
        )
    }
}
export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put (
            SignInFailure(error)
        )
    }
}
export function* onGoogleSignIn() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({payload:{email,password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    } catch (error) {
        yield put (
            SignInFailure(error)
        )
    }
}
export function* onEmailSignIn() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}
export function* userSagas() {
    yield all(
        [
            call(onGoogleSignIn),
            call(onEmailSignIn), 
            call(isUserAuthenticated), 
            call(signOutStart)
        ])
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return ;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put (
            SignInFailure(error)
        )
    }
};
export function* OnCheackUserSeasion() {
    yield takeLatest(UserActionTypes.CHECK_USER_SEASION, isUserAuthenticated)
}
export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error))
    }
}

export function* signOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}