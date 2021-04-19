import React from 'react';
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { useStyles } from './styles';


export const Back = () => {
  const styles = useStyles()

  return (
    <Link to="/" className={styles.link}>
      <Button>
        <span className={styles.span}>&#9668;</span>back
        </Button>
    </Link>
  )
}