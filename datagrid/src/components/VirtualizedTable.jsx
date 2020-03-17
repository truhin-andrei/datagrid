import React from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TextField from "@material-ui/core/TextField";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import AddIcon from "@material-ui/icons/Add";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { AutoSizer, Column, Table } from "react-virtualized";

var colors = { "1": "brown", "2": "green", "3": "blue" };

const styles = theme => ({
  flexContainer: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300
  },
  table: {
    "& .ReactVirtualized__Table__headerRow": {
      flip: false,
      paddingRight: theme.direction === "rtl" ? "0px !important" : undefined
    },
    "& .ReactVirtualized__Table__headerColumn": {
      alignItems: "stretch",
      display: "flex",
      flexWrap: "wrap"
    }
  },
  tableRow: {
    cursor: "pointer"
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200]
    }
  },
  tableCell: {
    flex: 1
  },
  noClick: {
    cursor: "initial"
  },
  input: {
    "&  input": {
      padding: "2px 5px"
    },
    "&  label": {
      transform: "translate(16px, 4px) scale(1)"
    }
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 150,
    rowHeight: 48
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };

  cellRenderer = ({ cellData }) => {
    const { classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        variant="body"
        style={{ height: rowHeight }}
        align="center"
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, dataKey }) => {
    const {
      classes,
      width,
      onSearch,
      onSort,
      direction,
      checked,
      toggleChecked,
      handleChange,
      selectedColors
    } = this.props;

    const getSortIcon = direct => {
      if (direct === undefined) return <AddIcon />;
      return direct ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />;
    };
    return (
      <>
        <TableCell
          component="div"
          className={clsx(
            classes.tableCell,
            classes.flexContainer,
            classes.noClick
          )}
          variant="head"
          style={{ height: 80, width, flexWrap: "wrap" }}
          align="center"
        >
          <span>{label}</span>
          {dataKey === "age" ? (
            <p onClick={() => onSort({ direction: !direction, dataKey })}>
              {" "}
              {getSortIcon(direction)}{" "}
            </p>
          ) : null}

          {dataKey === "name" || dataKey === "email" ? (
            <TextField
              onChange={e => onSearch({ query: e.target.value, dataKey })}
              label="search"
              variant="outlined"
              style={{ height: 10 }}
              className={classes.input}
            />
          ) : null}
          {dataKey === "active" ? (
            <FormControlLabel
              control={
                <Switch
                  size="small"
                  checked={checked}
                  onChange={() => toggleChecked({ checked: !checked, dataKey })}
                />
              }
              label={checked ? "active" : "all"}
            />
          ) : null}
          {dataKey === "eyeColor" ? (
            <FormControl className={classes.formControl}>
              <InputLabel
                id="demo-mutiple-name-label"
                style={{ transform: "translate(0, 13px) scale(1)" }}
              >
                Color
              </InputLabel>
              <Select
                labelId="demo-mutiple-name-label"
                multiple
                value={selectedColors}
                onChange={e => handleChange({ e: e.target.value })}
                input={<Input />}
                MenuProps={MenuProps}
                style={{ margin: 0 }}
              >
                {Object.values(colors).map(color => (
                  <MenuItem key={color} value={color}>
                    {color}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : null}
        </TableCell>
      </>
    );
  };

  render() {
    const {
      classes,
      columns,
      rowHeight,
      headerHeight,
      ...tableProps
    } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit"
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

export default VirtualizedTable;