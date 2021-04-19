import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles({
  container: {

    padding: '0px',
    border: '1px solid black',
    '@media (min-width: 1280px)': {
      maxWidth: '100%'
    }
  },
  section: {
    backgroundColor: '#363636',
    color: '#fff',
    padding: '3rem 1.5rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '600',
    lineHeight: '1.125',
  },
  subTitle: {
    fontSize: '1.25rem',
    fontWeight: '400',
    lineHeight: '1.25',
  },
});

