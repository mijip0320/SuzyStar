import React, { Component } from "react";
import { Menu, Segment, Icon, Image } from "semantic-ui-react";

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: "user" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const {setView} = this.props;
    return (
      <header style={{ margin: "70px 0px 0px 0px" }}>
        {/*위오아왼 */}
        <Menu
          pointing
          secondary
          fixed="top"
          style={{ backgroundColor: "rgba(245, 240, 234, 0.5)" }}
        >
          <Menu.Item position="right">
            <Image
            onClick={()=>setView("Home")}
              size="tiny"
              src="etc_image/logo.png"
              style={{ margin: "10px 0px 10px 200px", cursor:"pointer" }}
            />
            {/*위오아왼 */}
          </Menu.Item>
          {/* 로그인/카트/검색 */}
          <Menu.Menu position="right" style={{ margin: "0px 10px 25px 30px" }}>
            <Menu.Item as="a">
              <Icon
                size="large"
                color="grey"
                name="user"
                onClick={()=>{
                  setView("Login")
                }}
              />
            </Menu.Item>

            <Menu.Item as="a">
              <Icon
                size="large"
                color="grey"
                name="cart"
                onClick={()=>setView("Basket")}
              />
            </Menu.Item>

            <Menu.Item as="a">
              <Icon size="large" color="grey" name="search" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </header>
    );
  }
}
