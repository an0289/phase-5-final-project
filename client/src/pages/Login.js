import React, {useState} from 'react'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import { Form, Button, Header, Divider, Segment, Container, Image, Grid } from 'semantic-ui-react'
import Background from '../assets/bloodborne_banner_original.png'
function Login() {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <div style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '99vh' }}>
        <Divider hidden />
        <Container style={{ paddingLeft:260, paddingTop:90 }}>
            {showLogin ? (
            <>
            <Segment  inverted color='black' style={{ height:520, width:700 }}raised>
            <Divider hidden />
            <Header style={{ fontFamily: 'fleshandblood' }} size='huge' textAlign='center'>
                Eventful Encounters 
                </Header>
                <LoginForm />
                <Divider hidden />
                <Container fluid text>
                <Header as='h3' style={{ fontFamily: 'fleshandblood', color:'white' }} textAlign='center'> 
                <Image size='massive' src='../images/amygdala_sprite.png' />
                Don't have an account?
                </Header>
                <div style={{ paddingLeft:320}}>
                <Button basic inverted color='orange'  onClick={() => setShowLogin(false)}>Sign Up</Button>
                </div>
                </Container>
            </Segment>
            </>
            ) : (
            <>
            <Segment  inverted color='black' style={{ height:670, width:700 }}raised>
            <Divider hidden />
            <Header style={{ fontFamily: 'fleshandblood' }} size='huge' textAlign='center'>
                Eventful Encounters 
                </Header>
                <SignUpForm />
                <Container fluid text>
                <Header as='h3' style={{ fontFamily: 'fleshandblood', color:'white' }} textAlign='center'>
                <Image size='massive' src='../images/amygdala_sprite.png' />
                    Already have an account?
                </Header>
                <div style={{ paddingLeft:320}}>
                <Button inverted basic color='orange' onClick={() => setShowLogin(true)}>Sign In</Button>
                </div>
                </Container>
            </Segment>
            </>
            )}
        </Container>
        </div>
    )
}

export default Login