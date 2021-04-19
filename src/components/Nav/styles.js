import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  nav: {
    border: "1px solid black",
    "& .MuiBottomNavigationAction-label": {
      opacity: 1,
      fontSize: "1rem",
      fontFamily: "monospace"
    },
    height: "auto",
    padding: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    '@media (min-width: 1280px)': {
      maxWidth: '100%'
    }
  },
  bottomNav: {
    color: "#212121"
  },
  logo: {
    width: "100px",
    height: "100px",
  }
});