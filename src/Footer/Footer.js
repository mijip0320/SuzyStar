//Foote View 구성

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
            padding: "2em",
            fixed: "bottom",
          }}
        >
          <Container style={{ margin: "50px 0px 50px 0px" }}>
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
                    About Suzy...
                  </Header>
                  <p>출생 1994년 10월 10일</p>
                  <p>소속사 매니지먼트 숲</p>
                  <p>데뷔 2010년 미쓰에이 싱글 앨범 [Bad But Good]</p>
                  <p>
                    수상 2019년 SBS 연기대상 미니시리즈부문 여자 최우수연기상
                    (배가본드)
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
