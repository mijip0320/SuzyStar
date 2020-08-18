import "./App.css";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import Header from "./View/Header";
import Footer from "./View/Footer";
import Main from "./MainPage/Main";
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
            <Header />
          </Grid.Column>
        </Grid.Row>
        {view === "Home" && <Main />}
        {/* {view === "Login" && <Login />} */}
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
