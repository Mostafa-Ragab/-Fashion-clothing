import { connect } from 'react-redux';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import { compose } from 'redux';
import CollectionPage from '../collection/collection.component';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)

export default CollectionPageContainer;