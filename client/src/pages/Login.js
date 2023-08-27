import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { Form, Button, Header, Divider, Segment, Container, Image, Grid } from 'semantic-ui-react'

function Login() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
        <Divider hidden />
        <Container style={{ paddingLeft:260 }}>
            {showLogin ? (
            <>
            <Segment  color='black' style={{ height:520, width:700 }}raised>
            <Header style={{ fontFamily: 'Metal Mania' }} size='huge' textAlign='center'>
                Eventful Encounters 
                </Header>
                <LoginForm />
                <Divider hidden />
                <Container fluid text>
                <Header as='h3' style={{ fontFamily: 'Metal Mania' }} textAlign='center'> 
                Don't have an account?
                </Header>
                <Button basic color='black' attached='bottom' onClick={() => setShowLogin(false)}>Sign Up</Button>
                </Container>
            </Segment>
            </>
            ) : (
            <>
            <Segment  color='black' style={{ height:700, width:700 }}raised>
            <Header style={{ fontFamily: 'Metal Mania' }} size='huge' textAlign='center'>
                Eventful Encounters 
                </Header>
                <SignUpForm />
                <Divider hidden />
                <Container fluid text>
                <Header as='h3' style={{ fontFamily: 'Metal Mania' }} textAlign='center'>
                    Already have an account?
                </Header>
                <Button basic color='black' attached='bottom' onClick={() => setShowLogin(true)}>Sign In</Button>
                </Container>
            </Segment>
            </>
            )}
        </Container>
        </div>
    )
}

export default Login