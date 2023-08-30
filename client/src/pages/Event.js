import React, { useState, useContext } from 'react'
import { EventContext } from '../contexts/EventContext'
import { UserContext } from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import { Grid, Image, Divider, Segment, Button, Card, Form, Label } from 'semantic-ui-react'

function Event({ eventId, event }) {
    const {events, setEvents} = useContext(EventContext)
    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const type = user.type 


    function handlePurchaseTicket(newTicket) {
        const updatedUserTickets = [...user.tickets, newTicket]
        const updatedUser = {...user, tickets: updatedUserTickets}
        setUser(updatedUser)

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
                event_id: event.id
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newTicket) => handlePurchaseTicket(newTicket))
                console.log('ticket')
                navigate("/my_tickets")
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <>
        {(type === 'Attendee') ? (
        <Grid.Column stretched>
        <Image src={event.image_url} />
           <Card raised fluid color='black'>
               <Card.Content>
                   <Card.Header>
                       {event.title}
                   </Card.Header>
                   <Card.Description><b>Location:</b> {event.location}</Card.Description>
                   <Card.Description><b>Date:</b> {event.date}</Card.Description>
                   <Card.Description><b>Description:</b> {event.description}</Card.Description>
               </Card.Content>
               <Card.Content extra>
                   <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <Button basic color='violet'>Purchase Ticket</Button>
                        </Form.Field>
                        <Form.Field>
                            {errors.map((err) => (
                                <Label key={err}>{err}</Label>
                            ))}
                        </Form.Field>
                   </Form>
               </Card.Content>
           </Card>   
        <Divider hidden />
        </Grid.Column>
        ) : (
        <Grid.Column stretched>
            <Image src={event.image_url} />
               <Card raised fluid color='black'>
                   <Card.Content>
                       <Card.Header>
                           {event.title}
                       </Card.Header>
                       <Card.Description><b>Location:</b> {event.location}</Card.Description>
                       <Card.Description><b>Date:</b> {event.date}</Card.Description>
                       <Card.Description><b>Description:</b> {event.description}</Card.Description>
                   </Card.Content>
                 </Card>   
        <Divider hidden />
        </Grid.Column>  
        )}
    </>
    )
}

export default Event 