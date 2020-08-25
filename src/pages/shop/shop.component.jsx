import React from 'react';
import CollectionsOverview from '../../component/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component';
import { firestore , convertCollcetionsSnapshotToMap } from '../../component/firebase/firebase.utiles';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
  unsbscribeFromSnapshot = null;
  
  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollcetionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
    })

  }


  render () {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
});



export default connect(null,mapDispatchToProps)(ShopPage);