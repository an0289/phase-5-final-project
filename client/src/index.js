import React from 'react';
import { createRoot } from 'react-dom/client'
import { UserProvider } from './contexts/UserContext'
import { OrganizerProvider } from './contexts/OrganizerContext'
import { AttendeeProvider } from './contexts/AttendeeContext'
import { EventProvider } from './contexts/EventContext';
import { TicketProvider } from './contexts/TicketContext';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <UserProvider>
    <EventProvider>
    <TicketProvider>
      <App style={{ backgroundColor: 'black' }}/>
    </TicketProvider>
    </EventProvider>
    </UserProvider>
  </BrowserRouter>
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
