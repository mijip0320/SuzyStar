import { observable, computed, action } from "mobx";
import Users from "../Data/Users";
// 1.Mobx store 클래스 선언
class UserStore {
  @observable users = Users;
  @observable user = {};

  @observable
  loginUser = {};
 
  @computed
  get getUser() {
    return this.user ? { ...this.user } : {};
  }

  @computed
  get getUsers() {
    return this.users ? { ...this.users } : [];
  }

//입력창에 데이터가 입력된다
  @action
  setLgnProp(key, value) {
    this.loginUser = {
      ...this.loginUser,
      [key]: value,
    };
  }

//기능1. 로그인 버튼 클릭 이벤트 설정
  @action
  login() {
    if (
      this.users.find((user) => user.userId === this.loginUser.userId) &&
      this.users.find((user) => user.pasd === this.loginUser.pasd)
    ) {
      alert("로그인 성공!");
      this.user = this.users.find(user=>user.userId === this.loginUser.userId);

      return true;
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해 주세요.");
      return false;
    }
  }

  @action
  clearBasket(){
    this.user.basket = [];
  }
}

//객체를 생성해서 export
export default new UserStore();