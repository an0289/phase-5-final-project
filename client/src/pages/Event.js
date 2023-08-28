import React, { useState, useContext } from 'react'
import { EventContext } from '../contexts/EventContext'
import { AttendeeContext } from '../contexts/AttendeeContext'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { Grid, Image, Divider, Segment, Button, Card, Form } from 'semantic-ui-react'

function Event({ eventId, event }) {
    const {events, setEvents} = useContext(EventContext)
    const {attendee, setAttendee} = useContext(AttendeeContext)
    const [errors, setErrors] = useState([])
    
    function handlePurchaseTicket(newTicket) {
        const updatedAttendeeTickets = [...attendee.tickets, newTicket]
        const updatedAttendee = {...attendee, tickets: updatedAttendeeTickets}
        setAttendee(updatedAttendee)

        const updatedEvents = events.map((event) => {
            if(event.id === newTicket.event_id) {
               const updatedEventTickets = [...event.tickets, newTicket] 
               const newEvent = {...event, tickets: updatedEventTickets}
               return newEvent 
            }
            return event 
        })
        setEvents(updatedEvents)
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/tickets", {
            method: "POST", 
            headers: {
                "Context-Type": "application/json", 
            },
            body: JSON.stringify({
                event_id: eventId
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newTicket) => handlePurchaseTicket(newTicket))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
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
                        <Form onSubmit={handleSubmit}>
                            <Button type='submit' basic color='violet'>Purchase Ticket</Button>
                        </Form>
                    </Card.Content>
                </Card>   
            <Divider hidden />
        </Grid.Column>
    )
}

export default Event 