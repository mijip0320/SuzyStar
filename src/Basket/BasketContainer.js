//장바구니에 관한 정보를 각 스토어에서 불러와
//Basket.js로 전달해주는 컨테이너

import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Basket from './Basket';

@inject("ProductStore", "UserStore", "MainStore")
@observer
class BasketContainer extends Component {

    //장바구니에서 구매를 눌렀을때
    //UserStore에서 해당 User가 가진 basket배열을 초기화
    onBuy = () =>{
        alert("구매에 성공하였습니다!!");
        this.props.UserStore.clearBasket();
    }
    render() {
        //Basket.js에 props로 넘겨줄 요소를 불러옴
        //상품리스트, 해당유저의 장바구니 정보
        const products = this.props.ProductStore.getProducts;
        const user = this.props.UserStore.getUser;
        const baskets = user.basket;
        return (
            <Basket products={products} baskets={baskets} onBuy={this.onBuy}/>
        );
    }
}

export default BasketContainer;