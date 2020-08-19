import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  ButtonGroup,
} from "semantic-ui-react";
import "./Login.css";
import SignUp from "./SignUp";

// 피드백
const Login = (props) => {
  let { lgnBtn, setLgnProp } = props;

  return (
    // 로그인 폼
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          className="login-header"
          color=""
          textAlign="center"
          style={{ margin: "0px 0px 50px 0px" }}
        >
          Login
        </Header>

        <Form>
          <Segment stacked textAlign="left">
            <Form.Input
              label="ID"
              fluid
              icon="user"
              iconPosition="left"
              placeholder="ID"
              onChange={(e) => setLgnProp("userId", e.target.value)}
            />

            <Form.Input
              label="PW"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="PW"
              onChange={(e) => setLgnProp("pasd", e.target.value)}
            />

            <ButtonGroup style={{}}>
              <Button
                floated="left"
                style={{
                  width: "180px",
                  margin: "20px 0px 0px 0px",
                  backgroundColor: "rgba(245, 240, 234, 0.6)",
                }}
              >
                취소
              </Button>

              <Button
                floated="right"
                style={{
                  width: "180px",
                  margin: "20px 0px 0px 30px",
                  backgroundColor: "rgba(245, 240, 234, 0.6)",
                }}
                onClick={lgnBtn}
              >
                로그인
              </Button>
            </ButtonGroup>
          </Segment>

          <pasd
            textAlign="center"
            style={{
              fontSize: "13px",
              margin: "20px 0px 0px 0px",
              backgroundColor: "rgba(245, 240, 234, 0.1)",
            }}
          >
            아직 회원이 아니라면 회원가입하세요!
            <Button
              fluid
              size="large"
              style={{
                margin: "10px 0px 0px 0px",
                backgroundColor: "rgba(245, 240, 234, 0.6)",
              }}
              onClick={}
            >
              회원가입
            </Button>
          </pasd>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default Login;
