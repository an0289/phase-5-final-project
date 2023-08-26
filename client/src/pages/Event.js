import React, { useState, useContext } from 'react'
import { EventContext } from '../contexts/EventContext'
import { Grid, Image, Divider, Segment, Button, Card } from 'semantic-ui-react'

function Event({ event, id }) {
    const {events, setEvents} = useContext(EventContext)
    
    return (
        <Grid.Column stretched>
            {/* <Segment> */}
             <Image src={event.image_url} />
                <Card raised fluid >
                    <Card.Content>
                        <Card.Header>
                            {event.title}
                        </Card.Header>
                        <Card.Description>{event.description}</Card.Description>
                    </Card.Content>
                </Card>   
            {/* </Segment> */}
            <Divider hidden />
        </Grid.Column>
    )
}

export default Event 