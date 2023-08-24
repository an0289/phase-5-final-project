import React, { useState, useEffect, createContext } from 'react'

const EventContext = createContext()

function EventProvider({ children }) {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('/events').then((r) => {
            if (r.ok) {
                r.json().then((events) => setEvents(events))
            }
        })
    }, [])

    return <EventContext.Provider value={{ events, setEvents }}>{children}</EventContext.Provider>
}

export { EventContext, EventProvider }