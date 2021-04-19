import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';
import Input from './../Input/Input';

const Form = () => {
  const styles = useStyles();
  const [value, setValue] = useState({
    username: '',
  });

  const [players, setPlayers] = useState([])
  const [error, setError] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.username.trim()) return setError('sin espacios por favor')
    if (value.username === '') return setError('no campo vacio')

    setPlayers([...players, value.username])
    localStorage.setItem('username', JSON.stringify(players))
    setValue({
      username: ''
    })
  }
  const handleChange = (event) => {
    setValue({
      [event.target.name]: event.target.value
    })
  }


  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" value={value.username} handleChange={handleChange} name="username" />
      <Button
        className={styles.button}
        variant="contained"
        color="default"
        type="submit"
      >check in</Button>
      {error && (<Alert severity="error">{error}</Alert>)}
    </form>
  )
}


export default Form;