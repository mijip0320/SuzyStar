import { observable, computed, action } from "mobx";
import Users from "../Data/Users";
// 1.Mobx store 클래스 선언
class UserStore {
  //1.User.js에 대한 배열을 users로 받아오고
  //기존 배열의 객체 (observable이 이를 인지한다.)
  //처음 사용자가 웹사이트 접속시 비회원으로 접속
  @observable users = Users;
  @observable user = {
    userId: "guest",
  };

  //2. 입력하는 Id와 pasd를 객체로 받아온다.
  @observable
  loginUser = {};


  //5. 입력받은 값을 가져올 수 있는 객체 생성(SignUpContainer 돌고 옴)
  @observable
  signUpUser = {};

  @computed
  get getUser() {
    return this.user ? { ...this.user } : {};
  }

  @computed
  get getUsers() {
    return this.users ? { ...this.users } : [];
  }

  //3. Users 안의 속성을 key라고 한다.
  // 입력받은 key가 UserId 이면 UserId에 넣는다.
  @action
  setLgnProp(key, value) {
    this.loginUser = {
      ...this.loginUser,
      [key]: value,
    };
  }
  
  @action
  setGuest(){
    this.user = {
      userId : "guest"
    }
  }

  //6. 
  @action
  setSignUpProp(name, value) {
    this.signUpUser = {
      ...this.signUpUser,
      [name]: value,
    };
  }

  //4.로그인 성공 및 로그인 버튼을 눌렀을 때 HOME으로 가기 위한 조건 설정
  //기능1. 로그인 버튼 클릭 이벤트 설정
  @action
  login() {
    //이미 존재하는 userId값과 입력받은 값이 일치하면 && pasd값이 일치하면->alert
    if (
      this.users.find((user) => user.userId === this.loginUser.userId) &&
      this.users.find((user) => user.pasd === this.loginUser.pasd)
    ) {
      alert("로그인 성공!");
      //로그인 세션유지 
      this.user = this.users.find(
        (user) => user.userId === this.loginUser.userId
      );

      //loginContainer에서 lgnBtn 함수의 if를 실행하는데, 필요한 값이 true여야 하는데,
      //이를 return true로 지정해준다.
      return true;
    } else {
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

  //7. 회원가입 받아온 값 3개의 속성과, basket의 속성을 tempUser안에 저장한다.
  @action
  addSignUp(signUpUser) {
    let tempUser = { ...signUpUser, basket: [] };
    this.users = this.users.concat(tempUser); //tempUser를 users 배열 뒤에 붙여준다. (concat의 역할)
    this.signUpUser = {};//회원가입을 눌렀을 때 초기화

    return true;  //SignUpContainer.js의 3번 if문을 돌렸을 때 true가 필요해서 true를 이도록 설정.
  }
}

//객체를 생성해서 export
export default new UserStore();
