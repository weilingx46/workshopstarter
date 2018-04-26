import React from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

const CalendarComp = (props) => {
  return (
    <Calendar onPanelChange={onPanelChange} />
  );
};

export default CalendarComp;
