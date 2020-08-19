import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Basket from './Basket';

@inject("ProductStore", "UserStore")
@observer
class BasketContainer extends Component {

    onBuy = () =>{
        alert("구매에 성공하였습니다!!");
        this.props.UserStore.clearBasket();
    }
    render() {
        const products = this.props.ProductStore.getProducts;
        const user = this.props.UserStore.getUser;
        const baskets = user.basket
        console.log(baskets);
        return (
            <Basket products={products} baskets={baskets} onBuy={this.onBuy}/>
        );
    }
}

export default BasketContainer;