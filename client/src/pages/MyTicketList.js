import React, { useState, useContext } from 'react'
import MyTicket from './MyTicket'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'
import { AttendeeContext } from '../contexts/AttendeeContext'

function MyTicketList() {
 const {attendee} = useContext(AttendeeContext)

 return (
    <Grid columns={3} divided>
    <Grid.Row>
        {attendee.tickets.map((ticket => (
            <MyTicket key={ticket.id} id={ticket.id} ticket={ticket} />
        )))}
    </Grid.Row>
    </Grid>
 )
}

export default MyTicketList 