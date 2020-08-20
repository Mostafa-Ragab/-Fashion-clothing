import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../component/collection-item/collectionitem.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
const CollectionPage = ({ collections }) => {
    const { title, items } = collections;
    return (
       <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='item'>
            {items.map(item => (
                <CollectionItem key={item.id} item ={item}/>
                ))
            }
        </div>

    </div> 
    )
};


const mapStateToProps = (state, ownprops) => ({
    collection: selectCollection(ownprops.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);