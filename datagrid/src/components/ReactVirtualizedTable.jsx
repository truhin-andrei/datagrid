import React from 'react';
//import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { AutoSizer, Column, Table } from 'react-virtualized';

var colors = {"1": "brown", "2": "green", "3": "blue"}

const styles = theme => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  table: {
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
      
    },
    '& .ReactVirtualized__Table__headerColumn': {
      alignItems: 'stretch',
      display: 'flex',
      flexWrap: 'wrap'
    }
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
  },
  noClick: {
    cursor: 'initial',
  },
  input: {
    '&  input': {
      padding: '2px 5px',      
    },
    '&  label': { 
         transform: 'translate(16px, 4px) scale(1)'
        }
  }
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 100,
    rowHeight: 48,
  };

  getRowClassName = ({ index }) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData }) => {
    const { classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{ height: rowHeight }}
        align='center'
      >
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({ label, dataKey}) => {
    const {   classes, width, onSearch, onSort, direction, checked, toggleChecked, handleChange, selectedColors } = this.props;
//console.log(7, handleChange);

const getSortIcon = (direct) => {
  if (direct === undefined) return <AddIcon/>
 return  (direct ? <ArrowDownwardIcon/> :  <ArrowUpwardIcon/>)
}
    return (
      <>
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, classes.noClick)}
        variant="head"
        style={{ height: 48, width }}
        align='center'
      >
        <span >{label}</span>
        {dataKey=== 'age'? (<p onClick={()=> onSort({direction: !direction, dataKey})}> {getSortIcon(direction)} </p>): null}
      </TableCell>
      {dataKey=== 'name' || dataKey=== 'email' ? <TextField onChange={(e)=> onSearch({query: e.target.value, dataKey})}  label="search" variant="outlined" style={{ height: 10}} className={classes.input} /> : null}
      {dataKey=== 'active' ? <FormControlLabel control={<Switch size="small" checked={checked} onChange={() => toggleChecked({checked: !checked, dataKey})} />}
        label={checked? 'active' : 'all'}/>   : null}
      {dataKey === 'eyeColor' ?   <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Color</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          multiple
          value={selectedColors}
          onChange={(e)=>handleChange({e: e.target.value})}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {Object.values(colors).map(color => (
            <MenuItem key={color} value={color} >
              {color}
            </MenuItem>
          ))}
        </Select>
      </FormControl> : null}
      </>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
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
                      columnIndex: index,
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

export default function ReactVirtualizedTable(props) {
  const {rows, onSearch, onSort, direction, checked, toggleChecked, handleChange, selectedColors} = props;
  //console.log(71, handleChange);
  
  return (
    <Paper style={{ height: 600, width: '100%' }}>
      <VirtualizedTable
        rowCount={rows.length}
        onSearch={onSearch}
        onSort={onSort}
        direction={direction}
        checked={checked}
        toggleChecked={toggleChecked}
        handleChange={handleChange}
        selectedColors={selectedColors}
        rowGetter={({ index }) => 
        Object.assign({}, rows[index], 
          {number: index+1, registered: rows[index].registered.split('T')[0] ,active: rows[index].isActive ? 'yes': 'no'})}
        columns={[
          {
            width: 100,
            label: 'Number',
            dataKey: 'number',
          },
          {
            width: 170,
            label: 'Name',
            dataKey: 'name',
          },
          {
            width: 50,
            label: 'Age',
            dataKey: 'age',
          },
          {
            width: 100,
            label: 'Gender',
            dataKey: 'gender',
          },
          {
            width: 120,
            label: 'Balance',
            dataKey: 'balance',
          },
          {
            width: 100,
            label: 'Eye color',
            dataKey: 'eyeColor',
          },
          {
            width: 220,
            label: 'Email',
            dataKey: 'email',
          },
          {
            width: 170,
            label: 'Phone',
            dataKey: 'phone',
          },
          {
            width: 120,
            label: 'Registered',
            dataKey: 'registered',
          },
          {
            width: 120,
            label: 'Active',
            dataKey: 'active',
          },
        ]}
      />
    </Paper>
  );
}