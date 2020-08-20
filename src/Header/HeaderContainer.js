//Header에서 필요한 정보를 각 Store에서 불러와
//Header에 props로 전달

import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Header from "./Header";

@inject("MainStore", "UserStore")
@observer
class HeaderContainer extends Component {
    //Header에 있는 각 버튼에 맞게
    //화면전환을 해주는 함수
    setView = (view)=>{
        let user = this.props.UserStore.getUser;

        //장바구니 버튼을 눌렀을 때
        if(view === "Basket"){

            //user가 로그인하지 않은 guest 상태일 때
            if(user.userId === "guest"){
                alert("회원만 이용 가능합니다.");

                //mainView를 Home으로 설정
                this.props.MainStore.setMainView("Home")
            }
            //user가 로그인했을 경우에는 해당 장바구니 페이지로 이동
            else{
                this.props.MainStore.setMainView(view);
            }
        }
        //로그인 버튼을 눌렀을 때
        else if(view === "Login"){

            //user가 guest일 경우
            if(user.userId === "guest"){

                //로그인 페이지로 이동
                this.props.MainStore.setMainView(view);
            }
            //user가 로그인 되어있을 경우
            else{
                alert("로그아웃 되었습니다.")
                //UserStore에 user를 guest로 초기화
                this.props.UserStore.setGuest();

                //메인페이지로 이동
                this.props.MainStore.setMainView("Home")
            }
        }
        //메인 로고를 눌렀을 경우
        else if(view === "Home"){
            this.props.MainStore.setMainView(view);
        }
        
    }
    render() {
        return (
            //Header에 페이지 이동을 위한 함수 setView를 props로 전달
            <Header setView={this.setView}/>
        );
    }
  };


export default HeaderContainer;