import React, { useState } from 'react';
import { Box, Button, InputLabel, MenuItem, Select, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useStyles } from './styles';
import Input from './../Input/Input';
import { Back } from './../Back/Back';
import Muerte from './../../img/muerte.jpg'

const Form = () => {

  const [value, setValue] = useState({
    username: '',
    nameTournament: '',
    númberParticipants: ''
  });

  const [players, setPlayers] = useState([])
  const [error, setError] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(value)
    // if (value.username.trim()) return setError('sin espacios por favor')
    if (value.username === '') {

      setTimeout(() => {
        setError('')
      }, 5000)

      setError('no campo vacio')
      return
    }

    // setPlayers([...players, value.username])
    // localStorage.setItem('username', JSON.stringify(players))
    setValue({
      username: '',
      nameTournament: '',
      númberParticipants: ''
    })
  }
  const handleChange = (event) => {
    // console.log(event.target.value)
    setValue({
      ...value,
      [event.target.name]: event.target.value
    })
  }



  return (
    <form onSubmit={handleSubmit} className={useStyles().form}>
      {/* <img src={Muerte} alt="muerte" /> */}
      <Typography variant="h1" component="h1" className={useStyles().h1}>
        Inscripcion Fulanoschess
      </Typography>
      <Input label="Nombre usuario" value={value.username} handleChange={handleChange} name="username" />
      <Input label="Nombre del torneo" value={value.nameTournament} handleChange={handleChange} name="nameTournament" className={useStyles().input} />
      <InputLabel id="demo-customized-select-label" className={useStyles().input}>Numero de participantes</InputLabel>
      <Select
        name="númberParticipants"
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value.númberParticipants}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
      </Select>
      <Button
        className={useStyles().input}
        variant="contained"
        color="default"
        type="submit"
      >check in</Button>
      {error && (<Alert severity="error">{error}</Alert>)}
      <Back path="/" />
      {/* <Box component="div"> */}
      {/* </Box> */}
    </form>
  )
}


export default Form;