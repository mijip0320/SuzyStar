import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

      <Header as='h2' color='' textAlign='center'>
        Login
      </Header>
      
<Form size='large' >
        <Segment stacked textAlign='left'>
          {/* 기본 */}
          <Form.Input label='ID' fluid icon='user' iconPosition='left' placeholder='ID' />
          <Form.Input label='PW' fluid icon='lock' iconPosition='left' placeholder='PW' />
          <Button color='' fluid size='large'>
            로그인
          </Button>
        </Segment>
      </Form>

      <Form size='large' >
        <Segment stacked textAlign='left'>
          {/* 에러기능 추가시 */}
          <Form.Input
            error={{ content: 'ID가 입력되지 않았습니다.', pointing: 'below' }}
            fluid icon='user' 
            iconPosition='left'
            label='ID'
            placeholder='ID'
            id='form-input-id'
          />
    
          <Form.Input 
            error='PW가 입력되지 않았습니다.'
            fluid icon='lock' 
            iconPosition='left'
            label='PW'
            placeholder='PW'
            id='form-input-pwd'
          />

          <Button color='' fluid size='large'>
            로그인
          </Button>
        </Segment>
      </Form>


      
      {/*  회원가입 권유
       <Message textAlign='center' style={{fontSize:'13px'}}>
          SuzyStar의 회원이 되세요  |   <a style={{fontSize:'13px'}} href='#'>회원가입</a>
      </Message> */}



{/* 
      <Form size='large' >
        <Segment stacked textAlign='left'>
          <Form.Input label='아이디' fluid icon='user' iconPosition='left' placeholder='아이디를 입력하세요' />
          <Form.Input
            fluid
            label='비밀번호'
            icon='lock'
            iconPosition='left'
            placeholder='비밀번호를 입력하세요'
            type='password'
          />

          <Button color='blue' fluid size='large'>
            로그인
          </Button>
        </Segment>
      </Form>


      <Message textAlign='center' style={{fontSize:'13px'}}>
          SuzyStar의 회원이 되세요  |   <a style={{fontSize:'13px'}} href='#'>회원가입</a>
      </Message> */}

    </Grid.Column>
  </Grid>
)

export default LoginForm