import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  container: {
    // marginTop: '30px',
    // display: 'flex',
    textAlign: 'center',
  },
  ol: {
    listStyle: 'none',
    marginTop: '40px',
  },
  li: {
    marginTop: '30px',
    fontSize: '20px',
    color: '#3e2723',
  },
  img: {
    width: '500px',
    marginTop: '20px',
  },
  span: {
    color: 'black',
    fontWeight: '600',
    marginRight: '10px'
  },
  link: {
    display: 'inline-block',
    margin: '50px 40px',
    textDecoration: 'none',
    background: '#bf360c',
    borderRadius: '10px',
    padding: '5px',
  },
  button: {
    color: 'white'
  }
});