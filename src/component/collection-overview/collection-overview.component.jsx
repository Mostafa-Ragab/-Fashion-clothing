import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopItems} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collectionpreview/collectionpreview.component';


const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
  });
  
export default connect(mapStateToProps)(CollectionsOverview);