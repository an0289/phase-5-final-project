import React, { useState, useContext } from 'react'
import { Container, Button, Form, Segment, Divider, Label, Header, Radio } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function SignUpForm() {
    const {setUser} = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify({
                email, 
                name, 
                type, 
                password,
                password_confirmation: passwordConfirmation, 
                image_url: imageUrl
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setUser(user))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <>
        <Container style={{ paddingLeft:80}}>
        <Segment style={{ height:510, width:500}} raised>
            <Form onSubmit={handleSubmit}>
            <Header style={{ fontFamily: 'Metal Mania' }} textAlign='center' as='h3'>Sign Up Page</Header>
                    <Form.Field>
                        <label>Email</label>
                        <input 
                        type='text'
                        name='email'
                        value={email}
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Name</label>
                        <input 
                        type='text'
                        name='name'
                        value={name}
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                    <label>Password</label>
                        <input 
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                    <label>Password Confirmation</label>
                        <input 
                        type='password'
                        name='password_confirmation'
                        value={passwordConfirmation}
                        placeholder='Password Confirmation'
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Field>
                    <label>Avatar</label>
                        <input 
                        type='text'
                        name='imageUrl'
                        value={imageUrl}
                        placeholder='Avatar'
                        onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </Form.Field>
                    <Form.Group inline>
                    <label>Type: </label>
                        <Form.Field>
                           <input 
                           type='radio'
                           name='type'
                           value='Organizer'
                           checked={type === 'Organizer'}
                           onChange={(e) => setType(e.target.value)}
                           />
                        <label>Organizer</label>
                        </Form.Field>
                        <Form.Field>
                           <input 
                           type='radio'
                           name='type'
                           value='Attendee'
                           checked={type === 'Attendee'}
                           onChange={(e) => setType(e.target.value)}
                           />
                        <label>Attendee</label>
                        </Form.Field>
                        </Form.Group>
                    <Form.Field>
                        {errors.map((err) => (
                            <Label key={err}>{err}</Label>
                        ))}
                    </Form.Field>
                <Button floated='right' basic color='black' type='submit'>Sign Up</Button>
            </Form>
        </Segment>
        </Container>
        </>
        )
}

export default SignUpForm