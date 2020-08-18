import { observable, computed, action } from "mobx";
import Products from "../Data/Products";
class ProductStore {
  @observable products = Products;
  @observable product = Products[0];
  @observable open = false;
  @observable list = ["Music", "Photo", "Concert", "Living", "Beauty"];

  @computed get getProducts() {
    return this.products;
  }
  @computed get getProduct() {
    console.log(this.product);
    return this.product;
  }
  @computed get getOpen() {
    return this.open;
  }
  @computed get getList() {
    return this.list;
  }

  @action
  setProduct(data) {
    this.product = data;
  }

  @action
  setOpen() {
    this.open = true;
  }

  @action
  setClose() {
    this.open = false;
  }

  @action
  updateProduct(price) {
    let updateName = "Update";
    let updatePrice = price;
    this.product = { ...this.product, pName: updateName, price: updatePrice };
  }

  @action
  deleteProduct() {
    this.products = this.products.filter(
      (product) => this.product.id !== product.id
    );
    this.setClose();
  }
}
export default new ProductStore();
