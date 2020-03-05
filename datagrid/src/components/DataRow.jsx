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

export default function DataRow({ row }) {
  return (
    <StyledTableRow key={row.name}>
      <StyledTableCell align="left">{row.number}</StyledTableCell>
      <StyledTableCell component="th" scope="row">
        {row.name}
      </StyledTableCell>
      <StyledTableCell align="right">{row.calories}</StyledTableCell>
      <StyledTableCell align="right">{row.fat}</StyledTableCell>
      <StyledTableCell align="right">{row.carbs}</StyledTableCell>
      <StyledTableCell align="right">{row.protein}</StyledTableCell>
      <StyledTableCell align="right">{row.thing6}</StyledTableCell>
      <StyledTableCell align="right">{row.thing7}</StyledTableCell>
    </StyledTableRow>
  );
}
