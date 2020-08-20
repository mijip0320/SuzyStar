import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Login from "../View/Login";

//inject 함수: 컴포넌트에서 스토어에 접근할 수 있게 해주는 함수
//UserStore를 props로 전달받아서 사용할 수 있게 된다.
@inject("UserStore", "MainStore")
@observer
class LoginContainer extends Component {
  //입력창에 값 받아옴
  setLgnProp = (key, value) => {
    this.props.UserStore.setLgnProp(key, value);
  };

  //로그인 이벤트 발생 ->login이 정상 작동하면 메인 화면으로 이동
  lgnBtn = () => {
    if (this.props.UserStore.login()) {
      this.props.MainStore.setMainView("Home");
      // console.log(this.props.UserStore.getUser);
    }
  };

  //1)취소 이벤트
  //MainStore.js에 생성한 setMainView 함수를 불러온다.
  //setMainView함수는 "HOME"이라는 초기값을 갖고있다.
  //아래 코드에서 한번 더 확인해준다.
  //Mainpage로 가게 해주는 함수
  onCancel = () => {
    this.props.MainStore.setMainView("Home");
  };

  onSignUp = () => {
    this.props.MainStore.setMainView("SignUp");
  };
  render() {
    //user스토어에 있는 user state값 가져오기
    const { user } = this.props.UserStore;

    return (
      <Login
        onCancel={this.onCancel}
        onSignUp={this.onSignUp}
        user={user}
        lgnBtn={this.lgnBtn}
        setLgnProp={this.setLgnProp}
      />
    );
  }
}

export default LoginContainer;
