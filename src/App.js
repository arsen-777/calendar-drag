import React from 'react';
import './App.css';
import Calendar from './components/Calendar';
import { Draggable } from 'react-drag-and-drop';
import { events } from './helpers/data';
function App() {
  return (
    <>
      <div className="event-block">
        {events.map((event) => (
          <Draggable key={event.id} type="event" data={JSON.stringify(event)}>
            <div className="event">
              {event.startDate}:{event.endDate}
            </div>
          </Draggable>
        ))}
      </div>
      <Calendar />
    </>
  );
}

export default App;
