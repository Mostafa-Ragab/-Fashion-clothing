import { connect } from 'react-redux';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import CollectionsOverview from '../../component/collection-overview/collection-overview.component';
import { selectCollectionFetching } from '../../redux/shop/shop.selector';
import {createStructuredSelector} from 'reselect';
import { compose } from 'redux';


const mapStateToProps = createStructuredSelector({
    isLoading: selectCollectionFetching
});

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionOverviewContainer;