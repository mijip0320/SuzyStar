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

// 피드백
const Login = (props) => {
  let { lgnBtn, setLgnProp, onCancel, onSignUp } = props;

  return (
    // 로그인 폼
    <Grid.Row
      centered
      textAlign="center"
      style={{ height: "100vh" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header
          className="login-header"
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
              //input창에 입력된 데이터 감지 -> setLgnProp함수를 만든다.
              // 현재 사용자가 입력한 객체의 속성의 어떤 targetvalue인지 가져온다.
              onChange={(e) => setLgnProp("userId", e.target.value)}
            />

            <Form.Input
              label="PW"
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="PW"
              //input창에 입력된 데이터 감지 -> setLgnProp함수를 만든다.
              // 현재 사용자가 입력한 객체의 속성의 어떤 targetvalue인지 가져온다.
              onChange={(e) => setLgnProp("pasd", e.target.value)}
            />

            <ButtonGroup style={{}}>
              <Button
                onClick={onCancel}
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

          <p
            style={{
              fontSize: "13px",
              textAlign: "center",
              margin: "20px 0px 0px 0px",
              backgroundColor: "rgba(245, 240, 234, 0.1)",
            }}
          >
            아직 회원이 아니라면 회원가입하세요!
            <Button
              onClick={onSignUp}
              fluid
              size="large"
              style={{
                margin: "10px 0px 0px 0px",
                backgroundColor: "rgba(245, 240, 234, 0.6)",
              }}
            >
              회원가입
            </Button>
          </p>
        </Form>
      </Grid.Column>
    </Grid.Row>
  );
};
export default Login;

// const Login = () => {
//   const [form, setForm] = useState({
//     id: '',
//     pasd: ''
//   });
//   const { id, pasd } = form;
//   const onChange = e => {
//     setTimeout(() => console.log(e), 500);
//     const nextForm = {
//       ...form, // 기존의 form 내용을 이 자리에 복사 한 뒤
//       [e.target.name]: e.target.value // 원하는 값을 덮어씌우기
//     };
//     setForm(nextForm);
//   };
//   const onClick = () => {
//     alert(id + ': ' + pasd);
//     setForm({
//       id: '',
//       pasd: ''
//     });
//   };
//   const onKeyPress = e => {
//     if (e.key === 'Enter') {
//       onClick();
//     }
//   };
