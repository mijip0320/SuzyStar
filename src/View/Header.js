import React, { Component } from 'react'
import { Menu, Segment, Icon, Image } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'user' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <header  size='huge'  style={{margin: '70px 0px 0px 0px'}}> <header/>{/*위오아왼 */}

        <div>
        <Menu pointing secondary fixed='top' style={{backgroundColor: 'rgba(245, 240, 234, 0.5)'}}> {/*'rgba(250, 231, 218, 0.5)'*/}
        <Menu.Item position='right' >
          <Image size='tiny' src='etc_image/logo.png'
            style={{margin: '10px 0px 10px 100px'}} />{/*위오아왼 */}
        </Menu.Item>     

          {/* 로그인/카트/검색 */}
          <Menu.Menu position='right' 
                    style={{margin: '0px 10px 25px 30px'}}>
          <Menu.Item as='a'>
          <Icon size='large' color='grey' name='user'
          active={activeItem === 'user'}
          onClick={this.handleItemClick} />
          </Menu.Item>

          <Menu.Item as='a' >
          <Icon size='large' color='grey' name='cart'
          active={activeItem === 'cart'}
          onClick={this.handleItemClick} />
          </Menu.Item>

          <Menu.Item as='a' >
          <Icon size='large'  color='grey' name='search' />
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
        </header>

          
    )
  }
}