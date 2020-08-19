import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SignUp from "../View/SignUp";

@inject("UserStore", "MainStore")
@observer
class SignUpContainer extends Component {
  //입력창에 값 받아옴
  onSignUpProp = (name, value) => {
    this.props.UserStore.setSignUpProp(name, value);
  };

  onAddUser = () => {
    this.props.UserStore.addSignUp(this.props.UserStore.signUpUser);
  };

  toLogin = () => {
    this.props.MainStore.setMainView("Login");
  };

  render() {
    const { signUpUser } = this.props.UserStore;

    return (
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
