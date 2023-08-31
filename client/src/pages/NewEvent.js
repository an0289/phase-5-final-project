import React from 'react'
import { Button, Form, Segment, Divider, Container, Label, Header } from 'semantic-ui-react'
import NewEventForm from '../components/NewEventForm'

function NewEvent() {
    
    return (
        <>
        <Header style={{ paddingRight:280, paddingTop:50, fontFamily: 'fleshandblood', fontSize: '32px' }} textAlign='center' inverted>
             The Great Ones Are Among Us 
        </Header>
        <Container style={{ paddingLeft:260 }}>
            <Segment   inverted style={{ height:670, width:700 }}raised>
            <Divider hidden />
            <Header style={{ fontFamily: 'fleshandblood' }} size='huge' textAlign='center'>
                Submit A Cosmic Event 
                </Header>
                <NewEventForm />
            </Segment>
        </Container>
        </>
        // <Divider hidden />
        // <Container text>
        // <Segment >
        //     <Form onSubmit={handleSubmit}>
        //             <Form.Field>
        //             <label>Event Title</label>
        //             <input 
        //             type='text'
        //             name='title'
        //             value={title}
        //             placeholder='Event Title'
        //             onChange={(e) => setTitle(e.target.value)}
        //             />
        //             </Form.Field>
        //     </Form>
        // </Segment>
        // </Container>
        // <Form inverted onSubmit={handleSubmit}>
        //     <Form.Field>
                
        //         </Form.Field>
        //         <Form.Field>
        //         <label>Event ImageUrl</label>
        //         <input 
        //         type='text'
        //         name='image_url'
        //         value={imageUrl}
        //         placeholder='Event ImageUrl'
        //         onChange={(e) => setImageUrl(e.target.value)}
        //         />
        //         </Form.Field>
        //         <Form.Field>
        //         <label>Event Description</label>
        //         <textarea 
        //         type='text'
        //         name='description'
        //         value={description}
        //         placeholder='Event Description'
        //         onChange={(e) => setDescription(e.target.value)}
        //         />
        //     </Form.Field>
        //     <Form.Field>
        //         <label>Event Date (YYYY-MM-DD)</label>
        //         <input 
        //         type='text'
        //         name='date'
        //         value={date}
        //         placeholder='YYYY-MM-DD'
        //         onChange={(e) => setDate(e.target.value)}
        //         />
        //         </Form.Field>
        //         <Form.Field>
        //         <label>Event Location</label>
        //         <input 
        //         type='text'
        //         name='location'
        //         value={location}
        //         placeholder='location'
        //         onChange={(e) => setLocation(e.target.value)}
        //         />
        //         </Form.Field>
        //         <Form.Field>
        //             {errors.map((err) => (
        //                 <Label key={err}>{err}</Label>
        //             ))}
        //         </Form.Field>
        //     <Form.Field>
        //     <Button  basic color='grey' floated='right'>Submit</Button>
        //     </Form.Field>
        // </Form>
        // </>
        // </Segment>
        // </Container>
        )
}

export default NewEvent 