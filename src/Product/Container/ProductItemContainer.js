import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import ProductItem from "../View/ProductItem";

@inject("ProductStore")
@observer
class ProductItemContainer extends Component {
  onOpen = (data) => {
    let product = {
      id: data.id,
      pName: data.pName,
      price: data.price,
      imgUrl: data.imgUrl,
      des: data.des,
    };
    this.props.ProductStore.setProduct(product);
    this.props.ProductStore.setOpen();
  };
  render() {
    const products = this.props.ProductStore.getSelectProducts;
    const length = products.length;

    return (
      <ProductItem onOpen={this.onOpen} products={products} length={length} />
    );
  }
}

export default ProductItemContainer;
