import React from "react";
import Paper from "@material-ui/core/Paper";
import VirtualizedTable from "./VirtualizedTable";

export default function ReactVirtualizedTable(props) {
  const {
    rows,
    onSearch,
    onSort,
    direction,
    checked,
    toggleChecked,
    handleChange,
    selectedColors
  } = props;

  return (
    <Paper style={{ height: 600, width: "100%" }}>
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
          Object.assign({}, rows[index], {
            number: index + 1,
            registered: rows[index].registered.split("T")[0],
            active: rows[index].isActive ? "yes" : "no"
          })
        }
        columns={[
          {
            width: 100,
            label: "Number",
            dataKey: "number"
          },
          {
            width: 170,
            label: "Name",
            dataKey: "name"
          },
          {
            width: 50,
            label: "Age",
            dataKey: "age"
          },
          {
            width: 100,
            label: "Gender",
            dataKey: "gender"
          },
          {
            width: 120,
            label: "Balance",
            dataKey: "balance"
          },
          {
            width: 100,
            label: "Eye color",
            dataKey: "eyeColor"
          },
          {
            width: 220,
            label: "Email",
            dataKey: "email"
          },
          {
            width: 170,
            label: "Phone",
            dataKey: "phone"
          },
          {
            width: 120,
            label: "Registered",
            dataKey: "registered"
          },
          {
            width: 120,
            label: "Active",
            dataKey: "active"
          }
        ]}
      />
    </Paper>
  );
}
