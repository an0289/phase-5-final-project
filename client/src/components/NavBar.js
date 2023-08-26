import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Header, Input, Divider, Search, Container, Grid } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function NavBar() {
    const {setUser} = useContext(UserContext)

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
            <Menu tabular vertical floated='left' size='huge' style={{ paddingLeft:15 }}>
                <Menu.Item as={NavLink} to='/' name='home' />
                <Menu.Item as={NavLink} to="/my_events" name='My Events' />
                <Menu.Item as={NavLink} to='/new' name='Create A New Event' />
                <Menu.Item as={NavLink} onClick={handleLogoutClick} name='logout' />
            </Menu>
        </div>
    )
}

export default NavBar
