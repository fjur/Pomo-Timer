import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const TimeButton = (props) => {

  return (
    <RaisedButton label={props.time} onClick={props.onClick.bind(this, props.time)} style={style} />
  )
}

export default TimeButton;