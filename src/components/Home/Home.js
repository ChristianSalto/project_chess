import React from 'react';
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Container } from '@material-ui/core';
import { useStyles } from './styles'

import LogoHome from './../../img/viejaVSmuerte.png'

export const Home = () => {
  return (
    <Container className={useStyles().container}>
      <Box component="div">
        <img src={LogoHome} alt="logoHome" className={useStyles().img} />
      </Box>
      <Box component="div">
        <Link to="/crear" className={useStyles().link}>
          <Button className={useStyles().button}>
            Crear Torneos
        </Button>
        </Link>
        <Link to="/torneos" className={useStyles().link}>
          <Button className={useStyles().button}>
            Ver Torneos
        </Button>
        </Link>
        <ol className={useStyles().ol}>
          <li className={useStyles().li}>
            <span className={useStyles().span}>&#9760;</span>- Crea tu torneo de chess con tus fulanos preferidos.
          </li>
          <li className={useStyles().li}>
            <span className={useStyles().span}>&#9760;</span>- Es necesario estar registrado en <a href="https://www.chess.com">chess.com.</a>
          </li>
          <li className={useStyles().li}>
            <span className={useStyles().span}>&#9760;</span>- Si no puedes ayudar,estorba.Lo importante no es participar si no GANAR. !!!!
            </li>
        </ol>
      </Box>
    </Container>
  )
}
