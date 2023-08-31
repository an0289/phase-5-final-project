import React, { useState, useContext } from 'react'
import MyTicket from './MyTicket'
import { Grid, Image, Item, Icon } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function MyTicketList() {
 const {user} = useContext(UserContext)

 return (
    <Grid columns={3} >
    <Grid.Row>
        {user.tickets.map((ticket => (
            <MyTicket key={ticket.id} id={ticket.id} ticket={ticket} />
        )))}
    </Grid.Row>
    </Grid>
 )
}

export default MyTicketList 