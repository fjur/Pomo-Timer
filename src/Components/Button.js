import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) => {
  return (
     <div>
      <RaisedButton onClick={props.onClick} label={props.label} primary={props.primary} secondary={!props.primary}/>
     </div>
    )
 
};

export default Button;