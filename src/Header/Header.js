//HeaderView

import React, { Component } from "react";
import { Menu, Icon, Image } from "semantic-ui-react";

export default class MenuExampleSecondaryPointing extends Component {
  render() {
    
    //HeaderContainer에서 받은 setView함수
    const {setView} = this.props;
    return (
      <header style={{ margin: "70px 0px 0px 0px" }}>
        <Menu
          pointing
          secondary
          fixed="top"
          style={{ backgroundColor: "rgba(245, 240, 234, 0.5)" }}
        >
          <Menu.Item position="right">

            {/* 로고를 눌렀을 경우 메인페이지로 이동하기 위해 
            setView함수를 onClick으로 설정 */}
            <Image
            onClick={()=>setView("Home")}
              size="small"
              src="etc_image/logo.png"
              style={{ margin: "10px 0px 10px 200px", cursor:"pointer" }}
            />
          </Menu.Item>
          {/* 로그인/카트/검색 */}
          <Menu.Menu position="right" style={{ margin: "0px 10px 25px 30px" }}>
            <Menu.Item as="a">

            {/* 로그인 화면으로 이동하기 위해 onClick 설정 */}
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

              {/* 장바구니 화면으로 이동하기 위해 onClick 설정 */}
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
