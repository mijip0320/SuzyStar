import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Basket from './Basket';

@inject("ProductStore", "UserStore")
@observer
class BasketContainer extends Component {

    render() {
        const products = this.props.ProductStore.getProducts;
        const user = this.props.UserStore.getUser;
        const baskets = user.basket
        console.log(baskets);
        return (
            <Basket products={products} baskets={baskets}/>
        );
    }
}

export default BasketContainer;