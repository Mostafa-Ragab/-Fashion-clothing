import React from 'react';
import './collection-overview.styles.scss';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../collectionpreview/collectionpreview.component';
import {selectCollections} from '../../redux/shop/shop.selector';

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  });
  
export default connect(mapStateToProps)(CollectionsOverview);