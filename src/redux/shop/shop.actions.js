import shopActionTypes from './shop.types';

import {
    firestore, 
    convertCollcetionsSnapshotToMap
} from '../../component/firebase/firebase.utiles';
export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
}) 

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionTypes.fetchCollectionsFailure,
    payload: errorMessage
})
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
          const collectionsMap = convertCollcetionsSnapshotToMap(snapshot)
          dispatch(fetchCollectionsSuccess(collectionsMap));
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    }
}