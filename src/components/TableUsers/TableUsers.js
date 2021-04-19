import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';

import { StyledTableCell, StyledTableRow, useStyles } from './styles';
import { getUserChessStats, getUserChess } from '../../service/api';
import { users } from '../../service/users';
import Load from './../Load/Load';


const TableUsers = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);




  useEffect(() => {
    const handleApi = async () => {

      Promise.all(users.map(async (user) => {

        const { avatar, is_streamer, username, status } = await getUserChess(user)
        const { chess_rapid } = await getUserChessStats(user)
        const { last } = chess_rapid;
        const { rating } = last;

        setData(data => [...data, {
          avatar,
          is_streamer,
          username,
          status,
          rating
        }])
      }))
    }
    handleApi()
  }, [])



  return (

    <>
      {data.length === 0 ? (
        <Load />
      ) : (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="customized table">
            <TableHead className="head-t">
              <TableRow>
                <StyledTableCell>Username</StyledTableCell>
                <StyledTableCell align="right">Is_streamer</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Rating</StyledTableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row.username}>
                  <StyledTableCell component="th" scope="row">
                    <Avatar alt="User" src={row.avatar} />
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.is_streamer ? (
                      <Box component="span" className={classes.spanGreen}></Box>
                    ) : (
                      <Box component="span" className={classes.spanRed}></Box>
                    )}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.status}</StyledTableCell>
                  <StyledTableCell align="right">{row.rating}</StyledTableCell>

                </StyledTableRow>
              ))}

            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  )
}


export default TableUsers;