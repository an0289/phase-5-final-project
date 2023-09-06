import React, { useContext } from 'react'
import MyEvent from './MyEvent'
import { Grid, Container, Image, Message, Segment } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function MyEventList() {
    const {user} = useContext(UserContext)

    return (
        <>
        {(user.events.length >0) ? (
        <Grid columns={3} >
            <Grid.Row>
                {user.events.map((event => (
                    <MyEvent originalTitle={event.title} originalDescription={event.description} originalImage={event.image_url} originalDate={event.date} originalLocation={event.location} originalSeats={event.available_seats} key={event.id} id={event.id} event={event} />
                )))}
            </Grid.Row>
        </Grid>
        ) : (
        <Container text style={{ paddingLeft:200, paddingTop:50}}>
        <Segment inverted circular style={{ height:500, width:500 }}>
        <Message style={{ fontFamily: 'fleshandblood' }} color='black' size='huge'>
            <Image src='../images/ebrietas_sprite.png' size='small' inline/>
            <Message.Content>
                <Message.Header style={{ fontFamily: 'fleshandblood' }}>You have yet to create an event</Message.Header>
                Vist the 'create a new event' page to submit your cosmic revelations
            </Message.Content>
        </Message>
        </Segment>
        </Container>
        )}
        
        </>
    )
}

export default MyEventList 