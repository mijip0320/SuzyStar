import React, { Component } from "react";
import { Menu, Segment, Icon, Image } from "semantic-ui-react";
export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: "user" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu pointing secondary fixed="top" floated="right">
          <Menu.Item position="right">
            <Image size="mini" src="suzy_images/logo.png" />
          </Menu.Item>

          {/* 로그인/카트/검색 */}
          <Menu.Menu position="right">
            <Menu.Item as="a">
              <Icon
                color="grey"
                name="user"
                active={activeItem === "user"}
                onClick={this.handleItemClick}
              />
            </Menu.Item>

            <Menu.Item as="a">
              <Icon
                color="grey"
                name="cart"
                active={activeItem === "cart"}
                onClick={this.handleItemClick}
              />
            </Menu.Item>

            <Menu.Item as="a">
              <Icon color="grey" name="search" />
            </Menu.Item>

            {/* <Menu.Item
            name='user'
            active={activeItem === 'user'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Search'
            active={activeItem === 'Search'}
            onClick={this.handleItemClick}
          /> */}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}
