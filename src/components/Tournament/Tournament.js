import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';

import { styles } from './styles'

const Tournament = () => {
  const photo = JSON.parse(localStorage.getItem('photo'));
  photo.sort(() => Math.random() - 0.5);


  return (
    <Container className={styles().conteiner}>
      <Typography component="h1" className={styles().h1}>
        PLAYOFF BRACKET
        </Typography>
      <Typography component="h2" className={styles().h2}>
        Chess.com - TORNEO SAN FULANOS
      </Typography>
      <Box component="section" className={styles().section}>
        {photo.map((item, index) =>
          < Avatar key={index} src={item} className={styles().avatar} />
        )}
      </Box>
    </Container>
  )
}


export default Tournament;
