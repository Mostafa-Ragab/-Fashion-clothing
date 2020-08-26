import React from 'react';
import CollectionsOverview from '../../component/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {createStructuredSelector} from 'reselect';
import { selectCollectionFetching } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import WithSpinner from '../../component/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  
  componentDidMount() {
    const {fetchCollectionsStartAsync} =this.props;
    fetchCollectionsStartAsync()
  }


  render () {
    const { match , isCollectionFetching } = this.props;
       return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>} />
        <Route path={`${match.path}/:collectionId`} render = {(props) => <CollectionPageWithSpinner isLoading = {isCollectionFetching} {...props} />}/> 
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectCollectionFetching
})
const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: dispatch(fetchCollectionsStartAsync())
});



export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);