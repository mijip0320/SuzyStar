import "./App.css";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import HeaderContainer from "./Header/HeaderContainer";
import Footer from "./View/Footer";
import Main from "./MainPage/Main";
import Basket from "./Basket/Basket"
import { inject, observer } from "mobx-react";

@inject("MainStore")
@observer
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
        {view === "Home" && <Main />}
        {view === "Login" && <h1>Login</h1>}
        {view === "Basket" && <Basket/>}
        <Grid.Row>
          <Grid.Column>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
