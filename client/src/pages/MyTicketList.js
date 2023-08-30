import React, { useState, useContext } from 'react'
import MyTicket from './MyTicket'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'
import { OrganizerContext } from '../contexts/OrganizerContext'

function MyTicketList() {
 const {organizer} = useContext(OrganizerContext)

 return (
    <Grid columns={3} >
    <Grid.Row>
        {organizer.tickets.map((ticket => (
            <MyTicket key={ticket.id} id={ticket.id} ticket={ticket} />
        )))}
    </Grid.Row>
    </Grid>
 )
}

export default MyTicketList 