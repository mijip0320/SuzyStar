import "./App.css";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import Footer from "./View/Footer";
import ProductItem from "./View/ProductItem";

class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>Header</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Image Slide</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Product List</Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ProductItem />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>Etc....</Grid.Column>
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
