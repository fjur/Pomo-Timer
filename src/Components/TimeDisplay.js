import React from 'react';

const TimeDisplay = (props) => {
  return (
    <div className="Time-Display">{('0' + props.time).slice(-2)}</div>
  )
}

export default TimeDisplay;