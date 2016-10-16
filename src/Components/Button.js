import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
  height: 50,
  width: 100,
  // fontSize:
};

const Button = (props) => {
  return (
      <RaisedButton onClick={props.onClick} label={props.label} primary={props.primary} secondary={!props.primary} style={style} />
    )
 
};

export default Button;