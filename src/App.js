import "./App.css";
import { Grid } from "semantic-ui-react";
import React, { Component } from "react";
import Footer from "./View/Footer";
import ProductItem from "./View/ProductItem";
import ImageSlide from "./View/ImageSlide";
import ProductList from "./View/ProductList";
import ProductItem from "./View/ProductItem";
import Etc from "./View/Etc";
class App extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>Header</Grid.Column>
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
            <ProductItem />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <ProductItem />
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
