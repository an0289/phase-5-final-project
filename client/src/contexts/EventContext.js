import React, { useState, useEffect, createContext } from "react";

// create the context
const EventContext = createContext();

// create a provider component
function EventProvider({ children }) {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch("/events").then((r) => {
          if (r.ok) {
            r.json().then((events) => setEvents(events))
          }
        })
      }, [])
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <EventContext.Provider value={{ events, setEvents }}>{children}</EventContext.Provider>;
}

export { EventContext, EventProvider };