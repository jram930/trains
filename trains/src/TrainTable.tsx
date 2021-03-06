/* eslint-disable react/jsx-key */
import React from "react";
import { Train } from "../types/train";

import { useTable, Column } from "react-table";

export type TrainTableProps = {
  trains: Array<Train>;
};

function TrainTable(props: TrainTableProps) {
  const columns = React.useMemo(
    () => [
      {
        Header: "Number",

        accessor: "number",
      } as Column<Train>,

      {
        Header: "Route Name",

        accessor: "routeName",
      } as Column<Train>,
    ],

    []
  );

  const tableInstance = useTable<Train>({ columns, data: props.trains });

  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,
  } = tableInstance;

  return (
    // apply the table props

    <table {...getTableProps()}>
      <thead>
        {
          // Loop over the header rows

          headerGroups.map((headerGroup) => (
            // Apply the header row props

            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                // Loop over the headers in each row

                headerGroup.headers.map((column) => (
                  // Apply the header cell props

                  <th {...column.getHeaderProps()}>
                    {
                      // Render the header

                      column.render("Header")
                    }
                  </th>
                ))
              }
            </tr>
          ))
        }
      </thead>

      {/* Apply the table body props */}

      <tbody {...getTableBodyProps()}>
        {
          // Loop over the table rows

          rows.map((row) => {
            // Prepare the row for display

            prepareRow(row);

            return (
              // Apply the row props

              <tr {...row.getRowProps()}>
                {
                  // Loop over the rows cells

                  row.cells.map((cell) => {
                    // Apply the cell props

                    return (
                      <td {...cell.getCellProps()}>
                        {
                          // Render the cell contents

                          cell.render("Cell")
                        }
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default TrainTable;
