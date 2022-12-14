import React, { useState } from 'react';
import '../App.css';
import { Droppable } from 'react-drag-and-drop';

const Calendar = () => {
  const [days] = useState([
    { id: 1, day: 1 },
    { id: 2, day: 2 },
    { id: 3, day: 3 },
    { id: 4, day: 4 },
    { id: 5, day: 5 },
    { id: 6, day: 6 },
    { id: 7, day: 7 },
  ]);

  const [dropData, setDropData] = useState({});

  function onDrop(data, day) {
    const { id } = day;
    const newData = JSON.parse(data);
    if (id in dropData) {
      let { date } = dropData[id][dropData[id].length - 1];

      const newD = newData.date;
      const x = date.slice(6, date.length);
      const y = newD.slice(0, 5);

      if (x <= y) {
        setDropData({ ...dropData, ...dropData[id].push(newData) });
      } else {
        alert('You dont push meeting');
      }
    } else {
      setDropData({ ...dropData, [id]: [newData] });
    }
  }

  const removeEvent = (id, dayId) => {
    const filteredDropData = dropData[dayId].filter((el) => el.id !== id);
    setDropData({ ...dropData, [dayId]: [...filteredDropData] });
  };

  return (
    <div className="days">
      {days.map((day) => (
        <Droppable
          style={{ flex: '1 14%' }}
          types={['event']}
          key={day.id}
          onDrop={({ event }) => onDrop(event, day)}
        >
          <div className="day">
            {day.day}
            <div className="drag-block">
              {dropData[day?.id] &&
                dropData[day?.id].map((el) => (
                  <div key={el.id}>
                    {el.date}
                    <span
                      onClick={() => removeEvent(el.id, day.id)}
                      style={{ color: 'red', cursor: 'pointer' }}
                    >
                      x
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </Droppable>
      ))}
      <div></div>
    </div>
  );
};

export default Calendar;
