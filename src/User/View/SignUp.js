import React from 'react'
import { Message, ButtonGroup, Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import "./SignUp.css"

const signUpForm = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>

    <Header className='signup-header' textAlign='center' style={{margin: '0px 0px 50px 0px'}}>
      Sign Up
    </Header>      

    <Form>    
      <Segment stacked textAlign='left'>
        <Form.Input label='NAME' placeholder='' />
        <Form.Input label='ID' placeholder='영문소문자/숫자,4-16자' />
        <Form.Input label='Password' placeholder='영문/숫자/특수문자 중 2가지 이상 조합, 10자~16자' />
        
        <ButtonGroup  style={{  }}>
             <Button floated='left' style={{width: '180px', margin: "20px 0px 0px 0px", backgroundColor: "rgba(245, 240, 234, 0.6)"}}>취소</Button>
             <Button floated='right' style={{width: '180px', margin: "20px 0px 0px 30px", backgroundColor: "rgba(245, 240, 234, 0.6)"}}>회원가입</Button>   
            </ButtonGroup>              
        </Segment>

        <Message textAlign='center' style={{fontSize:'13px', margin: "20px 0px 0px 0px", backgroundColor: "rgba(245, 240, 234, 0.1)"}}>
          이미 회원이시라면 로그인하세요!
        <Button fluid size='large' style={{margin: "10px 0px 0px 0px", backgroundColor: "rgba(245, 240, 234, 0.6)"}}>
        로그인
      </Button>
      </Message>
        
    </Form>         
    </Grid.Column>
  </Grid>
)

export default signUpForm