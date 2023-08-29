import React, { useState, useContext } from 'react'
import { Container, Button, Form, Segment, Divider, Label, Header } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function LoginForm() {
    const {setUser} = useContext(UserContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
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
        <Divider hidden />
        <Container style={{ paddingLeft:80}}>
        <Segment style={{ height:250, width:500}} raised>
            <Form onSubmit={handleSubmit}>
                <Header style={{ fontFamily: 'Metal Mania' }} textAlign='center' as='h3'>Login Page</Header>
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
                        <label>Password</label>
                        <input 
                        type='password'
                        name='password'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Field>
                    {/* <Form.Field>
                        {errors.map((err) => (
                            <Label key={err}>{err}</Label>
                        ))}
                    </Form.Field> */}
                <Button floated='right' basic color='black' type='submit'>Login</Button>
            </Form>
        </Segment>
        </Container>
        </>
        )
}

export default LoginForm 