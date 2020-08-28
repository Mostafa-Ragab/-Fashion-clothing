import React from 'react';
import CollectionOverviewContainer from '../../component/collection-overview/collection.overview.container';
import {Route} from 'react-router-dom'
import CollectionPageContainer from '../collection/collection.container';
import { FetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }


  render () {
    const { match } = this.props;

       return (
        <div className='shop-page'>
          <Route exact 
            path={`${match.path}`} 
            component={CollectionOverviewContainer}
          />

          <Route 
            path={`${match.path}/:collectionId`} 
            component = { CollectionPageContainer }
          /> 
        </div>
      )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(FetchCollectionsStartAsync())
});



export default connect(
  null,
  mapDispatchToProps)
  (ShopPage);