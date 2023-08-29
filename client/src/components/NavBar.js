import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Input, Divider, Search, Container, Grid } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'
import { AttendeeContext } from '../contexts/AttendeeContext'
import { OrganizerContext } from '../contexts/OrganizerContext'


function NavBar() {
    const {user, setUser} = useContext(UserContext)
    const type = user.type 
    // const {attendee} = useContext(AttendeeContext)
    // const {organizer} = useContext(OrganizerContext)

    // i'm thinking of doing the ternary here to change between organizer vs attendee

    function handleLogoutClick() {
        fetch("/logout", { method: "Delete" }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        })
    }

    return (
        <div>
            {(type === 'Organizer') ? (
            <Menu tabular vertical floated size='massive' style={{ paddingLeft:15, fontFamily: 'Metal Mania' }}>
               <Menu.Item as={NavLink} to='/' name='home' />
               <Menu.Item as={NavLink} to="/my_events" name='My Events' />
               <Menu.Item as={NavLink} to='/new' name='Create A New Event' />
               <Menu.Item as={NavLink} onClick={handleLogoutClick} name='logout' />
            </Menu> 
            ) : (
            <Menu tabular vertical floated size='massive' style={{ paddingLeft:15, fontFamily: 'Metal Mania' }}>
                <Menu.Item as={NavLink} to='/' name='home' />
                <Menu.Item as={NavLink} to='/my_tickets' name='Purchased Tickets' />
                <Menu.Item as={NavLink} onClick={handleLogoutClick} name='logout' />
            </Menu>
            )}
        </div>
    )
}

export default NavBar
