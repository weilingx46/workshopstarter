import React from 'react';
import { Timeline } from 'antd';

const TimelineComp = (props) => {
  return (
    <Timeline>
      <Timeline.Item>Created Website 04/26/2018</Timeline.Item>
      <Timeline.Item>Solve initial network problems 04/26/2018</Timeline.Item>
      <Timeline.Item>Turned in Workshop 04/26/2018</Timeline.Item>
    </Timeline>
  );
};

export default TimelineComp;
