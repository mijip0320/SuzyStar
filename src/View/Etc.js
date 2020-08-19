import React, { Component } from "react";
import { Image, Grid, Reveal } from "semantic-ui-react";
import "./Etc.css";
class Etc extends Component {
  render() {
    return (
      <Grid
        columns={3}
        style={{ textAlign: "center", margin: "100px 0px 100px 70px" }}
      >
        <Grid.Row>
          <Grid.Column>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image src="/etc_image/etc1-1.png" size="large" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src="/etc_image/etc1.png" size="large" />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image src="/etc_image/suzy1.png" size="large" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src="/etc_image/etc2.png" size="large" />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image src="/etc_image/suzy2.png" size="large" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Image src="/etc_image/etc3.png" size="large" />
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      // <div className="container">
      //   <Image.Group size="large">
      //     <Image
      //       className="container-image"
      //       verticalAlign="middle"
      //       src="etc_image/suzy1.png"
      //     />
      //     <Image
      //       className="container-image"
      //       verticalAlign="middle"
      //       src="etc_image/suzy2.png"
      //     />
      //     <Image
      //       className="container-image"
      //       verticalAlign="middle"
      //       src="etc_image/suzy3.png"
      //     />
      //   </Image.Group>
      // </div>
    );
  }
}

export default Etc;
