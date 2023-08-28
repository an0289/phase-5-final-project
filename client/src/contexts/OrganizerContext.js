import React, { useState, useEffect, createContext } from "react";

// create the context
const OrganizerContext = createContext();

// create a provider component
function OrganizerProvider({ children }) {
  const [organizer, setOrganizer] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((organizer) => setOrganizer(organizer))
      }
    })
  }, [])
  // the value prop of the provider will be our context data
  // this value will be available to child components of this provider
  return <OrganizerContext.Provider value={{ organizer, setOrganizer }}>{children}</OrganizerContext.Provider>;
}

export { OrganizerContext, OrganizerProvider };