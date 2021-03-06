import React from "react";
import {
  Message,
  ButtonGroup,
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import "./SignUp.css";

const SignUp = (props) => {
  //onAddUser => 회원가입
  //onSignUpProp =>회원가입 당시 입력한 값을 받아옴
  //toLogin =>회원가입 완료시 자동으로 로그인 창으로 이동
  let { onAddUser, onSignUpProp, toLogin } = props;
  return (
    <Grid.Row
      centered
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          className="signup-header"
          textAlign="center"
          style={{ margin: "0px 0px 50px 0px" }}
        >
          Sign Up
        </Header>

        <Form>
          <Segment stacked textAlign="left">
            <Form.Input
              label="NAME"
              placeholder=""
              //2. 입력창에서의 값가져오기
              onChange={(e) => onSignUpProp("name", e.target.value)}
            />
            <Form.Input
              label="ID"
              placeholder="영문소문자/숫자,4-16자"
              onChange={(e) => onSignUpProp("userId", e.target.value)}
            />
            <Form.Input
              label="Password"
              placeholder="영문/숫자/특수문자 중 2가지 이상 조합, 10자~16자"
              onChange={(e) => onSignUpProp("pasd", e.target.value)}
            />

            <ButtonGroup style={{}}>
              {/* <Button
                floated="left"
                onClick={onCancel}
                style={{
                  width: "180px",
                  margin: "20px 0px 0px 0px",
                  backgroundColor: "rgba(245, 240, 234, 0.6)",
                }}
              >
                취소
              </Button> */}
              <Button
                // 회원가입 이벤트 발생
                onClick={onAddUser}
                fluid
                floated="right"
                size="large"
                style={{
                  width: "28rem",
                  margin: "10px 0px 0px 0px",
                  backgroundColor: "rgba(245, 240, 234, 0.6)",
                }}
              >
                회원가입
              </Button>
            </ButtonGroup>
          </Segment>

          <Message
            textAlign="center"
            style={{
              fontSize: "13px",
              margin: "20px 0px 0px 0px",
              backgroundColor: "rgba(245, 240, 234, 0.1)",
            }}
          >
            이미 회원이시라면 로그인하세요!
            {/* 로그인 창으로 이동 */}
            <Button
              fluid
              //4. toLogin버튼
              onClick={toLogin}
              size="large"
              style={{
                margin: "10px 0px 0px 0px",
                backgroundColor: "rgba(245, 240, 234, 0.6)",
              }}
            >
              로그인
            </Button>
          </Message>
        </Form>
      </Grid.Column>
    </Grid.Row>
  );
};

export default SignUp;
