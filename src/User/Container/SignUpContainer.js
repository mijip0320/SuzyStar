import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SignUp from "../View/SignUp";

@inject("UserStore", "MainStore")
@observer
class SignUpContainer extends Component {
  //2. 입력창에 값 받아옴 (name을 key로 해도됨)
  onSignUpProp = (name, value) => {
    this.props.UserStore.setSignUpProp(name, value);
  };

  //3. if의 조건이 true면 alert을 띄우고 로그인 창으로 이동
  onAddUser = () => {
    if (this.props.UserStore.addSignUp(this.props.UserStore.signUpUser)) {
      alert("회원가입 완료!");
      this.props.MainStore.setMainView("Login");
    }
  };

  //1. 로그인 화면이동
  toLogin = () => {
    this.props.MainStore.setMainView("Login");
  };

  render() {
    const { signUpUser } = this.props.UserStore;

    return (
      //4. 위의 함수를 불러올 수 있게 셋업
      <SignUp
        signUpUser={signUpUser}
        onSignUpProp={this.onSignUpProp}
        onAddUser={this.onAddUser}
        toLogin={this.toLogin}
      />
    );
  }
}

export default SignUpContainer;
