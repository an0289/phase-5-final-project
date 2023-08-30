import React, { useContext } from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input, Label } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'
import { EventContext } from '../contexts/EventContext'


function MyTicket({ id, ticket }) {
    const {user, setUser} = useContext(UserContext)
    const {events, setEvents} = useContext(EventContext)

    function handleDeleteTicket(deletedTicket) {
        const updatedUserTickets = user.tickets.filter((ticket) => ticket.id !== deletedTicket.id)
        const updatedUser = {...user, tickets: updatedUserTickets}
        setUser(updatedUser)

        const updatedEvents = events.map((event) => {
            if(event.id === deletedTicket.event_id) {
                const updatedTickets = event.tickets.filter((ticket) => ticket.id !== deletedTicket.id)
                const newEvent = {...event, tickets: updatedTickets}
                return newEvent
            }
                return event 
        })
        setEvents(updatedEvents)
    }

    function handleDeleteClick() {
        fetch(`/tickets/${id}`, {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                r.json().then((deletedTicket) => handleDeleteTicket(deletedTicket))
                console.log('deleted')
            }
        })
        console.log('really deleted')
    }
    console.log('really, really deleted')
    return (
        <   Grid.Column >
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
                        <Button onClick={handleDeleteClick} basic color='red'>Cancel Ticket</Button>
                    </Card.Content>
                </Card>
            </Card.Group>
            <Divider hidden />
        </Grid.Column>
    )
}

export default MyTicket 