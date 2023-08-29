import React from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input, Label } from 'semantic-ui-react'
import { AttendeeContext } from '../contexts/AttendeeContext'
import { EventContext } from '../contexts/EventContext'


function MyTicket(id, ticket) {
    return (
        <Grid.Column>
            <Segment>
            <Item.Group>
                <Item>
                    <Header as='h4'>{ticket.event_title}</Header>
                        <Item.Image size='tiny' src={ticket.event_image} />
                        <Item.Content>
                            <Item.Description>{ticket.event_date}</Item.Description>
                            <Item.Description>{ticket.event_location}</Item.Description>
                        </Item.Content>
                </Item>
            </Item.Group>
            </Segment>
            <Divider hidden />
        </Grid.Column>
    )
}

export default MyTicket 