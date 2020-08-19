import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SignUp from "../View/SignUp";

@inject("UserStore")
@observer
class SignUpContainer extends Component {
  onAddUser = () => {
    let signUpUser = this.props.UserStore.signUpUser;
    this.props.UserStore.addSignUp(signUpUser);
  };

  render() {
    const { signUpUser } = this.props.UserStore;

    return <SignUp signUpUser={signUpUser} onAddUser={this.onAddUser} />;
  }
}

export default SignUpContainer;
