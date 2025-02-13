import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SelectTicket from './pages/SelectTicket';
import AttendeeDetails from './pages/Atendee_Details';
import TicketReady from './pages/Ticket_Ready';
import './index.css';
import Trial from './pages/trial';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SelectTicket />} />
        <Route path='/attendee' element={<AttendeeDetails />} />
        <Route path='/ticket' element={<TicketReady />} />
        <Route path='/trial' element={<Trial />} />
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


