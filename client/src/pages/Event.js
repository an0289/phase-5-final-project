import React, { useState, useContext } from 'react'
import { EventContext } from '../contexts/EventContext'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { Grid, Image, Divider, Segment, Button, Card, Form } from 'semantic-ui-react'

function Event({ event, id }) {
    const {events, setEvents} = useContext(EventContext)
    const {user, setUser} = useContext(UserContext)
    
    function purchaseTicket(newTicket) {
        const updatedUserTickets = [...user]
    }

    return (
        <Grid.Column stretched>
             <Image src={event.image_url} />
                <Card raised fluid color='black'>
                    <Card.Content>
                        <Card.Header>
                            {event.title}
                        </Card.Header>
                        <Card.Description><b>Location:</b> {event.location}</Card.Description>
                        <Card.Description><b>Date:</b> {event.date}</Card.Description>
                        <Card.Description><b>Available Seats:</b> {event.available_seats}</Card.Description>
                        <Card.Description><b>Description:</b> {event.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button type='submit' basic color='violet'>Purchase Ticket</Button>
                    </Card.Content>
                </Card>   
            <Divider hidden />
        </Grid.Column>
    )
}

export default Event 