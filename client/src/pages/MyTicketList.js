import React, { useState, useContext } from 'react'
import MyTicket from './MyTicket'
import { Grid, Image, Item, Icon, Message, Container, Segment } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function MyTicketList() {
 const {user} = useContext(UserContext)

 return (
    <>
    {(user.tickets.length >0) ? (
    <Grid columns={3} >
    <Grid.Row>
        {user.tickets.map((ticket => (
            <MyTicket key={ticket.id} id={ticket.id} ticket={ticket} />
        )))}
    </Grid.Row>
    </Grid>
    ) :(
    <Container text style={{ paddingLeft:200, paddingTop:50}}>
    <Segment inverted circular style={{ height:500, width:500 }}>
    <Message style={{ fontFamily: 'fleshandblood' }} color='black' size='huge'>
        <Image src='../images/rom_sprite.png' size='tiny' floated='left'/>
        <Message.Content>
            <Message.Header style={{ fontFamily: 'fleshandblood' }}>You have yet to purchase any tickets</Message.Header>
            Go check out the events page for a list of available events
        </Message.Content>
    </Message>
    </Segment>
    </Container>
    )}
    
    </>
 )
}

export default MyTicketList 