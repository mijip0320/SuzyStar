import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import Login from "../View/Login";

@inject("UserStore")
@observer
class LoginContainer extends Component {

    setLgnProp = (key, value) =>{
        console.log(key, value);
    }
    lgnBtn = () => {
        this.props.UserStore.lgnBtn();        
    };

    render() {
        //user스토어에 있는 user state값 가져오기
        const { user } = this.props.UserStore;
        
        return (
        <Login 
        user={user}
        lgnBtn={this.lgnBtn}
        setLgnProp={this.setLgnProp}
        />
        );   
    }
}

export default LoginContainer;