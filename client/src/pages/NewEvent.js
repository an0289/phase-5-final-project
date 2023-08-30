import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Segment, Divider, Container, Label } from 'semantic-ui-react'
import { EventContext } from '../contexts/EventContext'
import { UserContext } from '../contexts/UserContext'

function NewEvent() {
    const {events, setEvents} = useContext(EventContext)
    const {user, setUser} = useContext(UserContext)
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [imageUrl, setImageUrl] = useState("")
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
        <Container style={{ paddingLeft:200 }} text>
        <Segment inverted color='black' raised>
        <Form inverted onSubmit={handleSubmit}>
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
                    {errors.map((err) => (
                        <Label key={err}>{err}</Label>
                    ))}
                </Form.Field>
            <Form.Field>
            <Button  basic color='grey' floated='right'>Submit</Button>
            </Form.Field>
        </Form>
        <Divider hidden />
        <Divider hidden />
        </Segment>
        </Container>
        <Divider hidden />
        </>
        )
}

export default NewEvent 