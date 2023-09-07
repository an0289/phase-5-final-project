import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Segment, Divider, Container, Label, Header } from 'semantic-ui-react'
import { EventContext } from '../contexts/EventContext'
import { UserContext } from '../contexts/UserContext'

function NewEventForm() {
    const {events, setEvents} = useContext(EventContext)
    const {user, setUser} = useContext(UserContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [availableSeats, setAvailableSeats] = useState(0)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleAddEvent(newEvent) {
        const updatedUserEvents = [...user.events, newEvent]
        const updatedUser = {...user, events: updatedUserEvents}
        setUser(updatedUser)
      
        setEvents([...events, newEvent])
      }

    function handleSubmit(e) { 
        e.preventDefault()
        fetch("/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                location,
                date,
                image_url: imageUrl,
                available_seats: Number(availableSeats),
                user_id: user.id 
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((newEvent) => handleAddEvent(newEvent))
                navigate("/my_events")
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <>
        <Container style={{ paddingLeft:80}}>
        <Segment inverted style={{ height:550, width:500}} raised>
            <Form inverted onSubmit={handleSubmit}>
            {/* <Header style={{ fontFamily: 'fleshandblood', color:'white' }} textAlign='center' as='h3'>Submit a Cosmic Event</Header> */}
                <Form.Field>
                   <label>Event Title</label>
                   <input 
                    type='text'
                   name='title'
                   value={title}
                    placeholder='Event Title'
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                <label>Event ImageUrl</label>
                 <input 
                type='text'
                name='image_url'
                value={imageUrl}
                placeholder='Event ImageUrl'
                onChange={(e) => setImageUrl(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label>Event Description</label>
                <textarea 
                type='text'
                name='description'
                value={description}
                placeholder='Event Description'
                onChange={(e) => setDescription(e.target.value)}
                />
            </Form.Field>
            <Form.Field>
                <label>Event Date (YYYY-MM-DD)</label>
                <input 
                type='text'
                name='date'
                value={date}
                placeholder='YYYY-MM-DD'
                onChange={(e) => setDate(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label>Event Location</label>
                <input 
                type='text'
                name='location'
                value={location}
                placeholder='location'
                onChange={(e) => setLocation(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                <label>Number of Available Seats</label>
                <input 
                type='text'
                name='available_seats'
                value={availableSeats}
                placeholder='Number of Seats'
                onChange={(e) => setAvailableSeats(e.target.value)}
                />
                </Form.Field>
                <Form.Field>
                    {errors.map((err) => (
                        <Label key={err}>{err}</Label>
                    ))}
                </Form.Field>
                <Button floated='right' inverted basic color='orange' type='submit'>Submit</Button>
            </Form>
        </Segment>
        </Container>
        </>
    )
}

export default NewEventForm 