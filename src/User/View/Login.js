import React from 'react'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import "./Login.css"

const LoginForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

      <Header className='login-header' color='' textAlign='center' style={{margin: '0px 0px 50px 0px'}}>
        Login
      </Header>
      
      <Form>
        <Segment stacked textAlign='left'>
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
    </Grid.Column>
  </Grid>
)

export default LoginForm
