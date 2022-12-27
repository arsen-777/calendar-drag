import React, { useState } from 'react';
import '../App.css';
import { Droppable } from 'react-drag-and-drop';
import { isValid } from '../helpers/isValid';
import { days } from '../helpers/data';

const Calendar = () => {
  const [dropData, setDropData] = useState({});

  function onDrop(data, day) {
    const { id } = day;
    const newData = JSON.parse(data);

    if (id in dropData) {
      if (isValid(dropData[id], newData)) {
        dropData[id].push(newData);
        dropData[id].sort((a, b) => (a.startDate > b.startDate ? 1 : -1));
        setDropData({ ...dropData, [id]: dropData[id] });
      } else {
        alert('You can not push this event');
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
          className="droppable"
          types={['event']}
          key={day.id}
          onDrop={({ event }) => onDrop(event, day)}
        >
          <div className="day">
            <p> {day.day}</p>
            <div className="drag-block">
              {dropData[day?.id] &&
                dropData[day?.id].map((el) => (
                  <div className="item" key={el.id}>
                    {el?.startDate}:{el?.endDate}
                    <span
                      className="spn"
                      onClick={() => removeEvent(el.id, day.id)}
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
