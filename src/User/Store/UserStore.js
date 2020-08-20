import { observable, computed, action } from "mobx";
import Users from "../Data/Users";
// 1.Mobx store 클래스 선언
class UserStore {
  @observable users = Users; //Users배열을 users로 받아옴
  @observable user = {
    //처음 사용자가 웹사이트 접속 시 비회원으로 접속
    userId: "guest",
  };

  @observable
  loginUser = {}; //입력하는 아이디와 비밀번호를 객체로 받아옴

  @observable
  signUpUser = {}; //입력받을 값을 받아오는 객체

  @computed
  get getUser() {
    //해당 객체 가져오기
    return this.user ? { ...this.user } : {};
  }

  @computed
  get getUsers() {
    //전체 배열 가져오기
    return this.users ? { ...this.users } : [];
  }

  //입력창에 데이터가 입력된다
  @action
  setLgnProp(key, value) {
    //key가 아이디일때 value를 입력한 값으로 아이디 설정, 패스워드도 마찬가지
    this.loginUser = {
      ...this.loginUser,
      [key]: value,
    };
  }

  @action
  setSignUpProp(name, value) {
    this.signUpUser = {
      ...this.signUpUser,
      [name]: value,
    };
  }

  //기능1. 로그인 버튼 클릭 이벤트 설정
  //버튼을 눌렀을때 로그인 성공과 홈으로 가기위한 조건
  @action
  login() {
    if (
      //기존 존재하는 아이디와 비번과 입력한 아이디와 비번이 같다면
      this.users.find((user) => user.userId === this.loginUser.userId) &&
      this.users.find((user) => user.pasd === this.loginUser.pasd)
    ) {
      alert("로그인 성공!");
      //세션유지?
      this.user = this.users.find(
        (user) => user.userId === this.loginUser.userId
      );

      //리턴값을 true로 설정함으로써 값이 정상적으로 대입됬다는 것을 알 수 있음
      return true;
    } else {
      //로그인 에러
      alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 시도해 주세요.");
      return false;
    }
  }

  @action
  setBasket(product) {
    this.user.basket = this.user.basket.concat(product.id);
  }

  @action
  clearBasket() {
    this.user.basket = [];
  }

  @action
  addSignUp(signUpUser) {
    //singUpUser의 속성 3개와 마지막 속성 basket을 tempUser에 저장, tempUser를 배열에 추가
    let tempUser = { ...signUpUser, basket: [] };
    this.users = this.users.concat(tempUser);
    this.signUpUser = {};

    return true;
  }
}

//객체를 생성해서 export
export default new UserStore();
