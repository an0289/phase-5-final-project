import React, { useEffect, useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import NavBar from './NavBar'
import Login from '../pages/Login'
import EventList from '../pages/EventList'
import MyEventList from '../pages/MyEventList'
import MyTicketList from '../pages/MyTicketList'
import NewEvent from '../pages/NewEvent'
import { Segment, Header, Divider, Image, Container, Grid } from 'semantic-ui-react'
import Background from '../assets/bloodborne_banner.png'


function App() {
  const {user} = useContext(UserContext)

  if (!user) return <Login />
  

  return (
    <>
    <Container fluid style={{ backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
      <Header style={{ paddingRight:25, paddingTop:25, fontFamily: 'fleshandblood', color: 'white', fontSize: '44px' }} textAlign='right'>
        Eventful Encounters  
      </Header>
      <Header textAlign='right' as='h3' style={{ paddingRight:25, fontFamily: 'fleshandblood', color:'white' }}>
        <Image  src={user.image_url} avatar/>
        <i>Welcome, {user.name}. Enlightenment is within reach!</i>
      </Header>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
    <NavBar  />
    </Container>
        <main>
          <Routes>
            <Route path="/new"
              element={<NewEvent />}
            />
            <Route path="/"
              element={<EventList />}
            />
            <Route path="/my_events"
              element={<MyEventList />}
            />
            <Route path="/my_tickets"
              element={<MyTicketList />}
            />
          </Routes>
        </main>        
    </>
  )

}

export default App;
