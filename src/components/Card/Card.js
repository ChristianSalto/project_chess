import React from 'react';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';


import { styles } from './styles';


const Card = () => {
  return (
    <Container className={styles().conteiner}>
      <Typography>18 February 1998</Typography>
      <Box component="div" className={styles().div}>0</Box>
      <Box component="span">:</Box>
      <Box component="div" className={styles().div}>0</Box>
      <Container className={styles().cntrAvatar}>
        <Box component="span">pepe</Box>
        <Avatar className={styles().avatar}></Avatar>
        <Avatar className={styles().avatar}></Avatar>
        <Box component="span">pepe</Box>
      </Container>
    </Container>
  )
}


export default Card;