import React from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input, Label } from 'semantic-ui-react'
import { AttendeeContext } from '../contexts/AttendeeContext'
import { EventContext } from '../contexts/EventContext'


function MyTicket({ id, ticket }) {
    return (
        <Grid.Column >
            <Card.Group>
                <Card>
                    <Card.Content>
                        <Image floated='right' size='tiny' src={ticket.event_image} />
                        <Card.Header as='a'>{ticket.event_title}</Card.Header>
                        <Card.Meta><b>Organizer:</b> {ticket.event_organizer}</Card.Meta>
                        <Card.Description><b>Date:</b> {ticket.event_date}</Card.Description>
                        <Card.Description><b>Location:</b>{ticket.event_location}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button basic color='red'>Cancel Ticket</Button>
                    </Card.Content>
                </Card>
            </Card.Group>
            <Divider hidden />
        </Grid.Column>
    )
}

export default MyTicket 