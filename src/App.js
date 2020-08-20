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

/*Header, Container: Main, Login, Basket, Signup, Footer 설정*/
class App extends Component {
  render() {
    let view = this.props.MainStore.getMainView;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <HeaderContainer />
          </Grid.Column>
        </Grid.Row>
        {/* Main.js의 메인 부분을 가져옴 */}
        {view === "Home" && <Main />}
        {view === "Login" && <LoginContainer />}
        {view === "Basket" && <BasketContainer />}
        {view === "SignUp" && <SignUpContainer />}

        <Grid.Row style={{ paddingBottom: 0 }}>
          <Grid.Column>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
