import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TableUsers from './../TableUsers/TableUsers';
import Nav from './../Nav/Nav';
import Form from './../Form/Form'



const useStyles = makeStyles({
  container: {
    padding: "1px",
    '@media (min-width: 1280px)': {
      maxWidth: '100%'
    }
  }
});


export const Main = () => {
  const style = useStyles()

  return (
    <Container className={style.container}>
      <header>
        <Nav />
      </header>
      <main>
        <TableUsers />
        <Form />
      </main>
    </Container>
  )
}
