import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const useStyles = makeStyles({
  container: {
    width: '1000px',
    border: '1px solid black',
  },
  img: {
    width: '100%'
  },
  box1: {
    marginLeft: '200px',
    marginTop: '115px',
  },
  box2: {
    marginLeft: '200px',
    marginTop: '220px',
  },

  box3: {
    marginLeft: '200px',
    marginTop: '330px',

  },
  box4: {
    marginLeft: '200px',
    marginTop: '440px',

  },
  box5: {
    marginLeft: '670px',
    marginTop: '115px',
  },
  box6: {
    marginLeft: '670px',
    marginTop: '220px',
  },
  box7: {
    marginLeft: '670px',
    marginTop: '330px',
  },
  box8: {
    marginLeft: '670px',
    marginTop: '440px',
  },
});

export const MyBox = styled(Box)({
  border: '1px solid black',
  borderRadius: '100px',
  width: '50px',
  height: '50px',
  position: 'absolute',
})