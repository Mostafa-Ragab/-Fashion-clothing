import {createSelector} from 'reselect';

const COLLECTIONS_ID_MAP = {
    hats: 1,
    sneakers:2,
    jackets:3,
    womens: 4,
    mens: 4
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParam => createSelector(
    [COLLECTIONS_ID_MAP],
    collections => collections.find(
        collection => collection.id ===COLLECTIONS_ID_MAP(collectionUrlParam)
    )
);