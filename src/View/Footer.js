import React, { Component } from "react";
import { Header, List, Segment, Grid, Container } from "semantic-ui-react";

class Footer extends Component {
  render() {
    return (
      <div id="element">
        <Segment
          inverted
          vertical
          style={{
            //  style={{margin: "20px 0px 0px 0px"
            padding: "2em",
            // position: "absolute",
            // left: "0px",
            // bottom: "0px",
            // right: "0px",
            fixed: "bottom",
          }}
        >
          <Container style={{margin: "50px 0px 50px 0px"}}>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h3" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Github</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Header inverted as="h3" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Suzy Official Site</List.Item>
                    <List.Item as="a">FAQ</List.Item>
                    <List.Item as="a">How To Support</List.Item>
                    <List.Item as="a">Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={9}>
                  <Header as="h3" inverted>
                    Footer Header
                  </Header>
                  <p>
                    Extra space for a call to action inside the footer that
                    could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default Footer;
