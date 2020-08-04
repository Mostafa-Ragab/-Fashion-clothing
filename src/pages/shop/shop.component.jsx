import React from 'react';
import SHOP_DATA from './shop.data';
class ShopPage extends React.Component {
    constructor() {
        super();
        this.state= SHOP_DATA
    }
    render() {
        return (
            <div>shop page</div>
        )
    }

}
export default ShopPage;