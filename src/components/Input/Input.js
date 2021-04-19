import React from 'react';
import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  return (
    <TextField id="standard-basic" label={props.label} value={props.value}
      onChange={props.handleChange} name={props.name} />
  )
}


export default Input;