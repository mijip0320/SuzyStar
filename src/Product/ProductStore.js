import { observable, computed } from "mobx";
import Products from "../Products";
class ProductStore {
  @observable products = Products;
  @observable product = {};

  @computed get getProducts() {
    return this.products;
  }
  @computed get getProduct() {
    return this.product;
  }
}
export default new ProductStore();
