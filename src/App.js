import "./App.css";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import Footer from "./View/Footer";
import LoginContainer from "./User/Container/LoginContainer";
import Main from "./MainPage/Main";
import BasketContainer from "./Basket/BasketContainer";
import { inject, observer } from "mobx-react";
import SignUpContainer from "./User/Container/SignUpContainer";

@inject("MainStore")
@observer
class App extends Component {
  render() {
    //
    let view = this.props.MainStore.getMainView;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderContainer />
          </Grid.Column>
        </Grid.Row>
        {/* 
        1.Main.js의 Main을 불러온다 
        2. SignUpContainer.js의 toLogin의 화면 이동 설정을 App.js에서 해준다.
        */}

        {view === "Home" && <Main />}
        {view === "Login" && <LoginContainer />}
        {view === "Basket" && <BasketContainer />}
        {view === "SignUp" && <SignUpContainer />}
        <Grid.Row>
          <Grid.Column>{/* <Revealer /> */}</Grid.Column>
        </Grid.Row>
        <Grid.Row style={{paddingBottom:0}}>
          <Grid.Column>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
