import { observable, computed, action } from "mobx";
import Users from "../Data/Users";
// 1.Mobx store 클래스 선언
class UserStore {
  @observable users = Users; //Users배열을 users로 받아옴
  @observable user = {
    //처음 사용자가 웹사이트 접속 시 비회원으로 접속
    userId: "guest",
  };

  //2. 입력하는 Id와 pasd를 객체로 받아온다.
  @observable
  loginUser = {}; //입력하는 아이디와 비밀번호를 객체로 받아옴

  //5. 입력받은 값을 가져올 수 있는 객체 생성(SignUpContainer 돌고 옴)
  @observable
  signUpUser = {
    userId: "",
    pasd: "",
    name: "",
  }; //입력받을 값을 받아오는 객체

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

  //3. Users 안의 속성을 key라고 한다.
  // 입력받은 key가 UserId 이면 UserId에 넣는다.
  @action
  setLgnProp(key, value) {
    //key가 아이디일때 value를 입력한 값으로 아이디 설정, 패스워드도 마찬가지
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
  //버튼을 눌렀을때 로그인 성공과 홈으로 가기위한 조건
  @action
  login() {
    //이미 존재하는 userId값과 입력받은 값이 일치하면 && pasd값이 일치하면->alert
    if (
      //기존 존재하는 아이디와 비번과 입력한 아이디와 비번이 같다면
      this.users.find((user) => user.userId === this.loginUser.userId) &&
      this.users.find((user) => user.pasd === this.loginUser.pasd)
    ) {
      console.log(this.user);
      console.log(this.users);
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

  //7. 회원가입 받아온 값 3개의 속성과, basket의 속성을 tempUser안에 저장한다.
  @action
  addSignUp() {
    //singUpUser의 속성 3개와 마지막 속성 basket을 tempUser에 저장, tempUser를 배열에 추가
    let tempUser = { ...this.signUpUser, basket: [] };
    if (
      this.signUpUser.userId === "" ||
      this.signUpUser.pasd === "" ||
      this.signUpUser.name === ""
    ) {
      alert("빈칸 없이 모두 채워주세요.");
      return false;
    } else {
      this.users = this.users.concat(tempUser); //tempUser를 users 배열 뒤에 붙여준다. (concat의 역할)
      console.log(this.users);
      this.signUpUser = {
        userId: "",
        pasd: "",
        name: "",
      }; //회원가입을 눌렀을 때 초기화
      return true; //SignUpContainer.js의 3번 if문을 돌렸을 때 true가 필요해서 true를 이도록 설정.
    }
  }
}

//객체를 생성해서 export
export default new UserStore();
