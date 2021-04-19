import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Tournament from './../Tournament/Tournament'

import { Back } from './../Back/Back';



import { useStyles } from './styles'


export const PlayOff = () => {
  const style = useStyles()

  return (
    <Container className={style.container}>
      <Box component="section" className={style.section}>
        <Typography component="p" className={style.title}>
          Torneos Chess.com
        </Typography>
        <Typography component="p">
          The place to challenge fulanos!
        </Typography>
      </Box>
      <Tournament />
      <Back />
    </Container >
  )
}


