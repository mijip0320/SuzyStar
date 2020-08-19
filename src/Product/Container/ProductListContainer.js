import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ProductList from "../View/ProductList";

@inject("ProductStore")
@observer
class ProductListContainer extends Component {
  selectProduct = (data) =>{
    this.props.ProductStore.setSelectProducts(data);
  }

  render() {
    let list = this.props.ProductStore.getList;
    return <ProductList list={list} selectProduct={this.selectProduct}/>;
  }
}

export default ProductListContainer;
