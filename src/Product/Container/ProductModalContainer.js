import React, { Component } from "react";
import ProductModal from "../View/ProductModal";
import { inject, observer } from "mobx-react";

@inject("ProductStore", "UserStore")
@observer
class ProductModalContainer extends Component {
  onClose = () => {
    this.props.ProductStore.setClose();
  };
  onUpdate = (price) => {
    this.props.ProductStore.updateProduct(price);
  };
  onDelete = () => {
    this.props.ProductStore.deleteProduct();
  };
  addBasket = () =>{
    let product = this.props.ProductStore.getProduct;
    this.props.UserStore.setBasket(product);
    this.onClose();
  }
  render() {
    const user = this.props.UserStore.getUser;
    const open = this.props.ProductStore.getOpen;
    const product = this.props.ProductStore.getProduct;
    return (
      <ProductModal
        open={open}
        onClose={this.onClose}
        onUpdate={this.onUpdate}
        onDelete={this.onDelete}
        addBasket={this.addBasket}
        product={product}
        user={user}
      />
    );
  }
}

export default ProductModalContainer;
