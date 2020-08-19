import "./App.css";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import ImageSlide from "./ImageSlider/ImageSlide";
import ProductItemContainer from "./Product/Container/ProductItemContainer";
import ProductItem from "./Product/View/ProductItem";
import ProductList from "./Product/View/ProductList";
import Header from "./View/Header";

import Login from "./User/View/Login";
import LoginContainer from "./User/Container/LoginContainer"
import SignUp from "./User/View/SignUp";

import Footer from "./View/Footer";
import Etc from "./View/Etc";
class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header />
            <LoginContainer />
            <SignUp />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ImageSlide />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <ProductList />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductItemContainer />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Etc />
          </Grid.Column>
        </Grid.Row>
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
