import React, { useState } from 'react'
import { Button, Form, Grid, Header, Segment, ButtonGroup } from 'semantic-ui-react'
import "./Login.css"

// 피드백
const Login = (props) => {
  let { lgnBtn, setLgnProp } = props;

 return (

  // 로그인 폼
  <Grid.Row centered  textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

      <Header className='login-header' color='' textAlign='center' style={{margin: '0px 0px 50px 0px'}}>
        Login
      </Header>
      
      <Form>
        <Segment stacked textAlign='left'>
          <Form.Input 
          label='ID' 
          fluid icon='user' 
          iconPosition='left' 
          placeholder='ID'
          onChange={(e) => setLgnProp("userId", e.target.value)}
          />

        <Form.Input 
        label='PW' 
        fluid icon='lock' 
        iconPosition='left' 
        placeholder='PW' 
        onChange={(e) => setLgnProp("pasd", e.target.value)}
        />

            <ButtonGroup  style={{}}>
             <Button floated='left' 
             style={{width: '180px', 
             margin: "20px 0px 0px 0px", 
             backgroundColor: "rgba(245, 240, 234, 0.6)"}}
             >
               취소
               </Button>

             <Button floated='right' 
             style={{width: '180px', 
             margin: "20px 0px 0px 30px", 
             backgroundColor: "rgba(245, 240, 234, 0.6)"}} 
             onClick={lgnBtn}
             >
               로그인
               </Button>   
            </ButtonGroup>              
        </Segment>

      <pasd textAlign='center' 
      style={{fontSize:'13px', 
      margin: "20px 0px 0px 0px", 
      backgroundColor: "rgba(245, 240, 234, 0.1)"}}>
          아직 회원이 아니라면 회원가입하세요!
      
      <Button fluid size='large' 
      style={{margin: "10px 0px 0px 0px", 
      backgroundColor: "rgba(245, 240, 234, 0.6)"}}>
        회원가입
      </Button>
      </pasd>

    </Form>         
    </Grid.Column>
  </Grid.Row>
  );
 }
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
 