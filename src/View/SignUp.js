import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import "./SignUp.css"
const signUpForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

      <Header as="h1" textAlign='center' style={{margin: '0px 0px 50px 0px'}}>
        Sign Up
      </Header>
      

<Form size='' >    
        <Segment stacked textAlign='left'>
          {/* 기본 */}

          <Form.Input label='이름' placeholder='' />
          <Form.Input label='아이디' placeholder='영문소문자/숫자,4-16자' />
          <Form.Input label='비밀번호' placeholder='영문/숫자/특수문자 중 2가지 이상 조합, 10자~16자' />
        </Segment>
      </Form>

          <Button color='' fluid size='large' style={{margin: '30px 0px 0px 0px'}}>
            회원가입
          </Button>
          </Grid.Column>
          </Grid>
)

export default signUpForm