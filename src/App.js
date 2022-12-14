import React, { useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import { Draggable } from 'react-drag-and-drop';
function App() {
  const [events] = useState([
    { id: 1, date: '11.00-13.00' },
    { id: 2, date: '14.00-15.00' },
    { id: 3, date: '16.00-17.00' },
    { id: 4, date: '17.30-18.00' },
    { id: 5, date: '12.30-13.00' },
  ]);

  return (
    <>
      <div className="event-block">
        {events.map((event) => (
          <Draggable key={event.id} type="event" data={JSON.stringify(event)}>
            <div className="event">{event.date}</div>
          </Draggable>
        ))}
      </div>
      <Calendar />
    </>
  );
}

export default App;
