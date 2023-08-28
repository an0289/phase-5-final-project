import React, { useState, useEffect, createContext } from "react";

// create the context
const AttendeeContext = createContext();

// create a provider component
function AttendeeProvider({ children }) {
  const [attendee, setAttendee] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((attendee) => setAttendee(attendee))
      }
    })
  }, [])
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <AttendeeContext.Provider value={{ attendee, setAttendee }}>{children}</AttendeeContext.Provider>;
}

export { AttendeeContext, AttendeeProvider };