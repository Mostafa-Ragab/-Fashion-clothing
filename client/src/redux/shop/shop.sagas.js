import { call, put, takeLatest, all} from 'redux-saga/effects';

import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap } from '../../component/firebase/firebase.utiles';
import { 
    fetchCollectionsFailure,
fetchCollectionsSuccess 
} from './shop.actions';

export function* fetchCollectionAsync () {
    try {

        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );  
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message))
    }    
}



export function* fetchCollectionStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionAsync )
}

export function* shopSagas() {
    yield all([call(fetchCollectionStart)])
}