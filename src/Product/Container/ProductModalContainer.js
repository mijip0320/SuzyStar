import React, { Component } from "react";
import ProductModal from "../View/ProductModal";
import { inject, observer } from "mobx-react";

@inject("ProductStore")
@observer
class ProductModalContainer extends Component {
  onClose = () => {
    this.props.ProductStore.setClose();
  };
  render() {
    const open = this.props.ProductStore.getOpen;
    const product = this.props.ProductStore.getProduct;
    return (
      <ProductModal open={open} onClose={this.onClose} product={product} />
    );
  }
}

export default ProductModalContainer;
