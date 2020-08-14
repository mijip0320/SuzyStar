import { observable, computed } from "mobx";
import Products from "../Products";
import Users from "../Users";
class Store {
  @observable users = Users;
  @observable user = {};

  @observable products = Products;
  @observable product = {};

  @computed get getUsers() {
    return this.users;
  }
  @computed get getUser() {
    return this.user;
  }

  @computed get getProducts() {
    return this.products;
  }
  @computed get getProduct() {
    return this.product;
  }
}
export default new Store();
