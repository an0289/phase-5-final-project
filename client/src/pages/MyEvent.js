import React, { useState, useContext } from 'react'
import { Grid, Image, Item, Icon, Card, Segment, Divider, Header, Button, Form, TextArea, Input, Label } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'
import { EventContext } from '../contexts/EventContext'

function MyEvent({ event, id, originalTitle, originalDescription, originalLocation, originalImage, originalDate, originalSeats }) {
    const {user, setUser} = useContext(UserContext)
    const {events, setEvents} = useContext(EventContext)
    const [isEdit, setIsEdit] = useState(false)
    const [title, setTitle] = useState(originalTitle)
    const [description, setDescription] = useState(originalDescription)
    const [date, setDate] = useState(originalDate)
    const [location, setLocation] = useState(originalLocation)
    const [errors, setErrors] = useState([])

    function handleUpdateEvent(updatedEvent) {
        const updatedUserEvents = user.events.map((event) => event.id === updatedEvent.id ? updatedEvent : event)
        const updatedUser = { ...user, events: updatedUserEvents}
        setUser(updatedUser)

        const updatedEvents = events.map((event) => {
            if(event.id === updatedEvent.id) {
                return updatedEvent
            }
            return event 
        })
        setEvents(updatedEvents)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsEdit(false)
        fetch(`/events/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, 
                description, 
                date,
                location
            })
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedEvent) => handleUpdateEvent(updatedEvent))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    function handleDeleteEvent(deletedEvent) {
        const updatedUserEvents = user.events.filter((event) => event.id !== deletedEvent.id)
        const updatedUser = {...user, events: updatedUserEvents}
        setUser(updatedUser)

        const updatedEvents = events.filter((event) => event.id !== id)
        setEvents(updatedEvents)
    }

    function handleDeleteClick() {
        fetch(`/events/${id}`, {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                r.json().then((deletedEvent) => handleDeleteEvent(deletedEvent))
            }
        })
    }

    return (
      <Grid.Column>
        {isEdit ? (
        <Card.Group>
        <Card color='red'>
            <Card.Content>
                <Image floated='left' size='small' src={event.image_url} />
                <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Event Title</label>
                    <input
                    type='text'
                    name='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Event Description</label>
                    <textarea
                    type='text'
                    name='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Event Location</label>
                    <input
                    type='text'
                    name='location'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Event Date (YYYY-MM-DD)</label>
                    <input
                    type='text'
                    name='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    {errors.map((err) => (
                        <Label key={err}>{err}</Label>
                    ))}
                </Form.Field>
                <Form.Field>
                <Button.Group >
                    <Button type='submit' color='black'>Submit Edit</Button>
                    <Button.Or />
                    <Button onClick={() => setIsEdit(false)} color='black'>Cancel Edit</Button>
                </Button.Group>
                </Form.Field>
            </Form>    
            </Card.Content>
        </Card>
    </Card.Group>
        ) : (
        <Card.Group>
            <Card color='red'>
                <Card.Content>
                    <Image floated='left' size='small' src={event.image_url} />
                    <Card.Header>{event.title}</Card.Header>
                    <Card.Description><b>Description:</b> {event.description}</Card.Description>
                    <Card.Description><b>Location:</b> {event.location}</Card.Description>
                    <Card.Description><b>Date:</b> {event.date}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                        <Button onClick={() => setIsEdit(true)} basic color='black'>Edit Event</Button>
                        <Button floated='right' onClick={handleDeleteClick} basic color='red'>Delete Event</Button>
                    
                </Card.Content>
            </Card>
        </Card.Group>
        )}
        <Divider hidden />
      </Grid.Column>  
    )
}

export default MyEvent 