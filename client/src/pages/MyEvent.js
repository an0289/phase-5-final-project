import React, { useState, useContext } from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input, Label } from 'semantic-ui-react'
import { OrganizerContext } from '../contexts/OrganizerContext'
import { EventContext } from '../contexts/EventContext'

function MyEvent({ event, id, originalTitle, originalDescription, originalLocation, originalImage, originalDate, originalSeats }) {
    const {organizer, setOrganizer} = useContext(OrganizerContext)
    const {events, setEvents} = useContext(EventContext)

    return (
      <Grid.Column>
        <Segment>
        <Item.Group>
            <Item>
            <Header as='h4'>{event.title}</Header>
                <Item.Image src={event.image_url} />
                <Item.Content>
                    <Item.Description>{event.Description}</Item.Description>
                    <Item.Description>{event.Date}</Item.Description>
                    <Item.Description>{event.Location}</Item.Description>
                    <Item.Description>{event.available_seats}</Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
        </Segment>
        <Divider hidden />
      </Grid.Column>  
    )
}

export default MyEvent 