import { observable, computed, action } from "mobx";
import Users from "../Data/Users";
// 1.Mobx store 클래스 선언
class UserStore {
  @observable users = Users;
  @observable user = Users[0];

  // 2.관리해야하는 state객체 @observable 선언, 초기화
  @observable
  users = Users; //Users(배열)

  @observable
  user = {}; //Users의 첫번째 객체를 가져와 초기화

  @observable
  loginUser = {};
  // 3.state 데이터 리턴 - @computed get으로 함수 구현
  @computed
  get getUser() {
    return this.user ? { ...this.user } : {};
  }

  @computed
  get getUsers() {
    return this.users ? { ...this.users } : [];
  }

  // 4.
  // //입력창에 데이터가 입력된다
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
    } else {
      alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해 주세요.");
    }
    this.user = this.loginUser;
  }
}

//객체를 생성해서 export
export default new UserStore();