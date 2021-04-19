import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LocalPlayIcon from '@material-ui/icons/LocalPlay';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Logo from './../../img/logo.jpg';

import { useStyles } from './styles';




const Nav = () => {
  const style = useStyles();
  const history = useHistory();
  const [route, setRoute] = useState("");

  const handleChangeNav = (event, value) => {
    history.push(`${value}`);
    setRoute(value)
  }


  return (
    <Container className={style.nav}>
      <Avatar alt="logo" src={Logo} className={style.logo} />
      <BottomNavigation value={route} onChange={handleChangeNav} >
        <BottomNavigationAction label="Play-off" icon={<LocalPlayIcon />} className={style.bottomNav} value="play-off" />
      </BottomNavigation>
    </Container>
  )
}


export default Nav;