import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) => {

  // console.log(props);

  // const style = {
  //   width: 100,
  // }

  return (
     <div>
      <RaisedButton onClick={props.onClick} label={props.label} primary={props.primary} secondary={!props.primary}/>
     </div>
    )
 
};

export default Button;