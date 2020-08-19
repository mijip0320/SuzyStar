import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Header from "./Header";

@inject("MainStore", "UserStore")
@observer
class HeaderContainer extends Component {
    setView = (view)=>{
        let user = this.props.UserStore.getUser;
        if(view === "Basket"){
            if(user.userId === "guest"){
                alert("회원만 이용 가능합니다.");
                this.props.MainStore.setMainView("Home")
            }
            else{
                this.props.MainStore.setMainView(view);
            }
        }
        else if(view === "Login"){
            this.props.MainStore.setMainView(view);
        }
        else if(view === "Home"){
            this.props.MainStore.setMainView(view);
        }
        
    }
    render() {
        return (
            <Header setView={this.setView}/>
        );
    }
  };

export default HeaderContainer;
