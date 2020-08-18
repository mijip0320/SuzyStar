import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ProductList from "../View/ProductList";

@inject("ProductStore")
@observer
class ProductListContainer extends Component {
  render() {
    let list = this.props.ProductStore.getList;
    return <ProductList list={list} />;
  }
}

export default ProductListContainer;
