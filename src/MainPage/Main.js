import React from "react";
import { Grid } from "semantic-ui-react";
import ImageSlide from "../ImageSlider/ImageSlide";
import ProductListContainer from "../Product/Container/ProductListContainer";
import ProductItemContainer from "../Product/Container/ProductItemContainer";
import Etc from "../View/Etc";

const Main = () => {
  return (
    <>
      <Grid.Row>
        <Grid.Column>
          <ImageSlide />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <ProductListContainer />
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
    </>
  );
};
export default Main;
