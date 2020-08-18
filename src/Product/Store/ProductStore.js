import { observable, computed, action } from "mobx";
import Products from "../Data/Products";
class ProductStore {
  @observable products = Products;
  @observable product = Products[0];
  @observable open = false;

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
}
export default new ProductStore();
