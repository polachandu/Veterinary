//UNUSED AT THE MOMENT
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function UpdatesTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Comment</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Animal</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">Provider Name</TableCell>
	    <TableCell align="right">Notification</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.animals.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.comment}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.animal}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.providerName}</TableCell>
              <TableCell align="right">{row.notification}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UpdatesTable;
