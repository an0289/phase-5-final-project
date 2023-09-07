import React from 'react'
import { Button, Form, Segment, Divider, Container, Label, Header } from 'semantic-ui-react'
import NewEventForm from '../components/NewEventForm'

function NewEvent() {
    
    return (
        <>
        <Header style={{ paddingRight:280, paddingTop:25, fontFamily: 'fleshandblood', fontSize: '32px' }} textAlign='center' inverted>
             Look To The Stars...The Great Ones Are Among Us 
        </Header>
        <Container style={{ paddingLeft:260 }}>
            <Segment   inverted style={{ height:850, width:700 }}raised>
            <Divider hidden />
            <Header style={{ fontFamily: 'fleshandblood' }} size='huge' textAlign='center'>
                Submit A Cosmic Event 
                </Header>
                <NewEventForm />
            </Segment>
        </Container>
        </>
        )
}

export default NewEvent 