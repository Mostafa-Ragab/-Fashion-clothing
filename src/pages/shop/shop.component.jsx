import React from 'react';
import CollectionPreview from '../../component/collectionpreview/collectionpreview.component';
import {selectShopItems} from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';

const ShopPage =({collections}) => (
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
)


const mapStateToProps = createStructuredSelector({
  collections: selectShopItems
})

export default connect(mapStateToProps)(ShopPage);