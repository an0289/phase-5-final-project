import React, { useState, useEffect, createContext } from "react";

// create the context
const TicketContext = createContext();

// create a provider component
function TicketProvider({ children }) {
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        fetch("/tickets").then((r) => {
          if (r.ok) {
            r.json().then((tickets) => setTickets(tickets))
          }
        })
      }, [])
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <TicketContext.Provider value={{ tickets, setTickets }}>{children}</TicketContext.Provider>;
}

export { TicketContext, TicketProvider };