import { observable, computed, action } from "mobx";
import Users from "../Data/Users";

class UserStore {
  @observable users = Users;
  @observable user = Users[0];

  @computed get getUsers() {
    return this.users;
  }
  @computed get getUser() {
    return this.user;
  }

  @action
  setBasket(product){
    this.user.basket = this.user.basket.concat(product.id);
  }
}
export default new UserStore();
