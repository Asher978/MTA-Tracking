import React from 'react';

const TrainTimes = props => {
  return (
    <div>
      <p>There are currently {props.mta.length} {props.train.toUpperCase()} trains running</p>
    </div>
  )
}

export default TrainTimes;