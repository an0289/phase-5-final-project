import React, { useContext } from 'react'
import MyEvent from './MyEvent'
import { Grid } from 'semantic-ui-react'
import { UserContext } from '../contexts/UserContext'

function MyEventList() {
    const {user} = useContext(UserContext)

    return (
        <Grid columns={3} divided>
            <Grid.Row>
                {user.events.map((event => (
                    <MyEvent originalTitle={event.title} originalDescription={event.description} originalImage={event.image_url} originalDate={event.date} originalSeats={event.available_seats} key={event.id} id={event.id} event={event} />
                )))}
            </Grid.Row>
        </Grid>
    )
}

export default MyEventList 