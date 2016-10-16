import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
    // <FlatButton label={props.time} onClick={props.onClick} primary={true} />


const style = {
  margin: 12,
};

const TimeButton = (props) => {
  // console.log(props);

  // const updateTime = (e) => {
  //   props.
  // }

  return (
    <RaisedButton label={props.time} onClick={props.onClick.bind(this, props.time)} style={style} />
  )
}

export default TimeButton;