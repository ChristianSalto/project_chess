import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import brown from '@material-ui/core/colors/brown';

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: brown[500],
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,

  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const useStyles = makeStyles({
  table: {
    minWidth: 700,
    "& .MuiTableCell-root": {
      border: "1px solid rgba(224, 224, 224, 1)",
      textAlign: "-webkit-center"
    },
    "& .MuiAvatar-root": {
      display: "inline-table",
      verticalAlign: "middle",
      marginRight: "10px"
    },
    "& .MuiBox-root": {
      display: "block",
      width: "20px",
      height: "20px",
    },
  },
  spanGreen: {
    backgroundColor: "green",
  },
  spanRed: {
    backgroundColor: "red",
  }
});