import React from 'react';
import CollectionsOverview from '../../component/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component';

const ShopPage =({match}) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CollectionPage}/> 
  </div>
)



export default ShopPage;