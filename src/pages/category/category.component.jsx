import React from 'react';
import './category.styles.scss';
import collectionItem from '../../component/collection-item/collectionitem.component';
import { selectCollections } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
const CategoryPage = ({collection}) => (
    <div className='category'>
        <h2>category page</h2>

    </div>
);


const mapStateToProps = (state, ownprops) => ({
    collection: selectCollections(ownprops.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CategoryPage);