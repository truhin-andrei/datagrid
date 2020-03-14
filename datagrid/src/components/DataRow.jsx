import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const StyledTableCell = withStyles(theme => ({
  head: {
    background: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

export default function DataRow({ row, ind }) {
  return (
    <StyledTableRow key={row._id}>
      <StyledTableCell align="left">{ind}</StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {row.name}
      </StyledTableCell>
      <StyledTableCell align="right">{row.age}</StyledTableCell>
      <StyledTableCell align="right">{row.gender}</StyledTableCell>
      <StyledTableCell align="right">{row.balance}</StyledTableCell>
      <StyledTableCell align="right">{row.eyeColor}</StyledTableCell>
      <StyledTableCell align="right">{row.email}</StyledTableCell>
      <StyledTableCell align="right">{row.phone}</StyledTableCell>
      <StyledTableCell align="right">{row.registered}</StyledTableCell>
      <StyledTableCell align="right">{row.isActive ? 'yes' : 'no'}</StyledTableCell>
    </StyledTableRow>
  );
}
