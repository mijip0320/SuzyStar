import { observable, computed, action } from "mobx";
import Users from "../Data/Users"
// 1.Mobx store 클래스 선언
class UserStore {

  // 2.관리해야하는 state객체 @observable 선언, 초기화
  @observable 
  users = Users; //Users(배열)
 
  @observable 
  user = {}; //Users의 첫번째 객체를 가져와 초기화

  // 3.state 데이터 리턴 - @computed get으로 함수 구현
  @computed 
  get getUser() {
    return this.user ? {...this.user} : {};
  }

  @computed
  get getUsers() {
    return this.users ? {...this.users} : [];
  }

  // 4.  
  // //입력창에 데이터가 입력된다
  @action
  setLgnProp(key, value){
    this.user = {
      ...this.user,
      [key]: value,
    };
  }  

  //기능1. 로그인 버튼 클릭 이벤트 설정
  @action
  lgnBtn(){
    this.users = this.users.find((user) => user.userId !==this.user.userId);
    this.users = this.users.find((user) => user.pasd !==this.user.pasd);
    // this.user = {}; //find //let user -> alert
  }
  //기능2. alert
}

//객체를 생성해서 export
export default new UserStore();