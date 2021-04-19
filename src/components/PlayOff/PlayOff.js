import React from 'react';
import Container from '@material-ui/core/Container';

import { Back } from './../Back/Back';



import { useStyles, MyBox } from './styles'
import Playoff from '../../img/playoff.png';

export const PlayOff = () => {
  const style = useStyles()

  return (
    <Container className={style.container}>
      {/* <h1>Welcome to the playoffs !!!</h1>
      <MyBox component="div" className={style.box1}></MyBox>
      <MyBox component="div" className={style.box2}></MyBox>
      <MyBox component="div" className={style.box3}></MyBox>
      <MyBox component="div" className={style.box4}></MyBox>
      <MyBox component="div" className={style.box5}></MyBox>
      <MyBox component="div" className={style.box6}></MyBox>
      <MyBox component="div" className={style.box7}></MyBox>
      <MyBox component="div" className={style.box8}></MyBox>
      <img src={Playoff} alt="play-off" className={style.img} />
      <Back /> */}
    </Container>
  )
}


