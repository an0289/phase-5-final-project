import React, { useEffect, useState, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
import NavBar from './NavBar'
import Login from '../pages/Login'
import EventList from '../pages/EventList'
import MyEventList from '../pages/MyEventList'
import NewEvent from '../pages/NewEvent'
import { Segment, Header, Divider, Image, Container, Grid } from 'semantic-ui-react'

function App() {
  const {user} = useContext(UserContext)

  // if (!user) return <Login />
  

  return (
    <>
    <Segment>
      <Divider hidden />
      <Header style={{ paddingRight:25 }} textAlign='right' size='huge'>
        My Eldritch Horrors 
      </Header>
      <Divider hidden />
    </Segment>
    <Divider hidden />
    <NavBar  />
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
          </Routes>
        </main>        
    </>
  )

}

export default App;
