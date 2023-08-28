import React, { useContext } from 'react'
import Event from './Event'
import { EventContext } from '../contexts/EventContext'
import { Grid } from 'semantic-ui-react'

function EventList() {
    const {events} = useContext(EventContext)

    return (
        <Grid columns={3} > 
            <Grid.Row>
                {events.map((event => (
                    <Event key={event.id} eventId={event.id} event={event} />
                )))}
            </Grid.Row>
        </Grid>
    )
}

export default EventList 