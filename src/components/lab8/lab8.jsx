import React, {useContext, useState, useMemo} from "react";
import {styled} from "@mui/material/styles";
import Button from "@mui/material/Button";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'

  const defaultData = [
    {
      firstName: 'tanner',
      lastName: 'linsley',
      age: 24,
      visits: 100,
      status: 'In Relationship',
      progress: 50,
    },
    {
      firstName: 'tandy',
      lastName: 'miller',
      age: 40,
      visits: 40,
      status: 'Single',
      progress: 80,
    },
    {
      firstName: 'joe',
      lastName: 'dirte',
      age: 45,
      visits: 20,
      status: 'Complicated',
      progress: 10,
    },
  ]
  
  const columnHelper = createColumnHelper()

  const sortStatusFn = (rowA, rowB, _columnId) => {
    const statusA = rowA.original.status
    const statusB = rowB.original.status
    const statusOrder = ['single', 'complicated', 'relationship']
    return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB)
  }
  
function LabEight() {
    const [data, _setData] = React.useState(() => [...defaultData])
  const rerender = React.useReducer(() => ({}), {})[1]
  const [sorting, setSorting] = useState([]) // can set initial sorting state here

  const columns = useMemo (() => [
    {
      cell: info => info.getValue(),
      footer: info => info.column.id,
      accessorKey: 'firstName', 
      SortingFn: sortStatusFn,
    },
    {
      accessorFn: row => row.lastName,
      id: 'lastName',
      cell: info => <i>{info.getValue()}</i>,
      header: () => <span>Last Name</span>,
      footer: info => info.column.id,
      SortingFn: sortStatusFn,
    },
    {
      accessorKey: 'age',
      header: () => 'Age',
      cell: info => info.renderValue(),
      footer: info => info.column.id,
      SortingFn: sortStatusFn,
    },
    {
      accessorKey: 'visits',
      header: () => <span>Visits</span>,
      footer: info => info.column.id,
      SortingFn: sortStatusFn,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      footer: info => info.column.id,
      SortingFn: sortStatusFn,
    },
    {
      accessorKey: 'progress',
      header: 'Profile Progress',
      footer: info => info.column.id,
      SortingFn: sortStatusFn,
    },
  ], []
)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => ( //Invalid event handler property `onclick`. Did you mean `onClick`?
                <th key={header.id} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
      <button onClick={() => rerender()} className="border p-2">
        Rerender
      </button>
    </div>
  )
}
export default LabEight;