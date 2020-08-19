import React from "react";
import { Image, Reveal, Grid } from "semantic-ui-react";
// import "./Revealer.css";

const Revealer = () => (
  <Grid columns={3} divided>
    <Grid.Row style={{ margin: "0px 0px 0px 70px" }}>
      <Grid.Column>
        <Reveal animated="small fade">
          <Reveal.Content visible>
            <Image src="etc_image/suzy1.png" size="large" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <p>Hello World</p>
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="small fade">
          <Reveal.Content visible>
            <Image src="etc_image/suzy1.png" size="large" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <p>Hello World</p>
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
      <Grid.Column>
        <Reveal animated="small fade">
          <Reveal.Content visible>
            <Image src="etc_image/suzy1.png" size="large" />
          </Reveal.Content>
          <Reveal.Content hidden>
            <p>Hello World</p>
          </Reveal.Content>
        </Reveal>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Revealer;
