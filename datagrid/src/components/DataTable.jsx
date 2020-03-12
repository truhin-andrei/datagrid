import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import DataRow from "./DataRow";

const StyledTableCell = withStyles(theme => ({
  head: {
    background: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

function createData(
  number,
  name,
  calories,
  fat,
  carbs,
  protein,
  thing6,
  thing7
) {
  return { number, name, calories, fat, carbs, protein, thing6, thing7 };
}

const rows = [
  createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0, 6, 7),
  createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3, 6, 7),
  createData(2, "Eclair", 262, 16.0, 24, 6.0, 6, 7),
  createData(2, "Cupcake", 305, 3.7, 67, 4.3, 6, 7),
  createData(2, "Gingerbread", 356, 16.0, 49, 3.9, 6, 7)
];

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

export default function DataTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Number</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Balance</StyledTableCell>
            <StyledTableCell align="right">Eye&nbsp;color</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Phone</StyledTableCell>
            <StyledTableCell align="right">Registered</StyledTableCell>
            <StyledTableCell align="right">Active</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <DataRow row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
