import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MixerHorizontalIcon } from '@radix-ui/react-icons'
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowDownAZ, ArrowUpAz } from 'lucide-react'
import { useState } from 'react'

const defaultData = [
  {
    id: '123',
    description: 'Producto 1',
    category: 'Electrónicos',
    subcategory: 'Smartphones',
    retailPrice: 599.99,
    wholesalePrice: 499.99,
    cost: 350.0,
    quantity: 100,
    sku: 'SKU123',
    upc: '123456789012',
    supplier: 'Proveedor A',
    productStatus: 'Disponible',
    manufacturingDate: '2023-01-15',
    expirationDate: '2024-01-15',
    lastUpdateTime: '2024-01-18T12:30:00',
  },
  {
    id: '456',
    description: 'Producto 2',
    category: 'Ropa',
    subcategory: 'Camisetas',
    retailPrice: 29.99,
    wholesalePrice: 19.99,
    cost: 10.0,
    quantity: 200,
    sku: 'SKU456',
    upc: '987654321098',
    supplier: 'Proveedor B',
    productStatus: 'En espera',
    manufacturingDate: '2023-02-20',
    expirationDate: '2024-02-20',
    lastUpdateTime: '2024-01-18T13:45:00',
  },
  // Agrega más productos según sea necesario
]

const defaultColums = [
  {
    id: 'select',
    header: ({ table }) => (
      <input
        type="checkbox"
        checked={table.getIsAllRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
        ref={(el) => {
          if (el) {
            el.indeterminate = table.getIsSomeRowsSelected()
          }
        }}
        className="peer size-4 shrink-0 rounded-sm border border-primary bg-background text-foreground shadow focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
      />
    ),
    cell: ({ row }) => (
      <input
        type="checkbox"
        checked={row.getIsSelected()}
        disabled={!row.getCanSelect()}
        onChange={row.getToggleSelectedHandler()}
        ref={(el) => {
          if (el) {
            el.indeterminate = row.getIsSomeSelected()
          }
        }}
        className="peer size-4 shrink-0 rounded-sm border border-primary bg-background text-foreground shadow focus:ring-0 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    enableResizing: false,
    size: 'auto',
  },
  {
    accessorKey: 'id',
    id: 'id',
    header: 'Id',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'description',
    id: 'description',
    header: 'Descripción',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'category',
    id: 'category',
    header: 'Categoría',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'subcategory',
    id: 'subcategory',
    header: 'Subcategoría',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'retailPrice',
    id: 'retailPrice',
    header: 'Precio minorista',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'wholesalePrice',
    id: 'wholesalePrice',
    header: 'Precio mayorista',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'cost',
    id: 'cost',
    header: 'Costo',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'quantity',
    id: 'quantity',
    header: 'Cantidad',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'sku',
    id: 'sku',
    header: 'SKU',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'upc',
    id: 'upc',
    header: 'UPC',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'supplier',
    id: 'supplier',
    header: 'Proveedor',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'productStatus',
    id: 'productStatus',
    header: 'Estado',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'manufacturingDate',
    id: 'manufacturingDate',
    header: 'Fabricación',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'expirationDate',
    id: 'expirationDate',
    header: 'Expiración',
    cell: (row) => row.getValue(),
    size: 200,
  },
  {
    accessorKey: 'lastUpdateTime',
    id: 'lastUpdateTime',
    header: 'Actualización',
    cell: (row) => row.getValue(),
    size: 200,
  },
]

const index = () => {
  const [data, setData] = useState(() => [...defaultData])
  const [columns] = useState(() => [...defaultColums])
  const [globalFilter, setGlobalFilter] = useState('')
  const [rowSelection, setRowSelection] = useState({})

  const [columnResizeMode] = useState('onChange')

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      rowSelection,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    columnResizeMode,
    enableRowPinning: true,
  })

  let columnBeingDragged

  const onDragStart = (e) => {
    columnBeingDragged = Number(e.currentTarget.dataset.columnIndex)
  }

  const onDrop = (e) => {
    e.preventDefault()
    const newPosition = Number(e.currentTarget.dataset.columnIndex)
    const currentCols = table.getVisibleLeafColumns().map((c) => c.id)
    const colToBeMoved = currentCols.splice(columnBeingDragged, 1)

    currentCols.splice(newPosition, 0, colToBeMoved[0])
    table.setColumnOrder(currentCols)
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar..."
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="flex h-8 w-60 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto hidden h-8 lg:flex"
            >
              <MixerHorizontalIcon className="mr-2 size-4" />
              Tabla
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            <DropdownMenuLabel>Tabla</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {table
              .getAllLeafColumns()
              .filter(
                (column) =>
                  typeof column.accessorFn !== 'undefined' &&
                  column.getCanHide(),
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                    className="capitalize"
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="relative mt-4 flex-1 overflow-scroll">
        <table
          className="w-fit text-sm"
          style={{ width: table.getCenterTotalSize() }}
        >
          <thead className="sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="flex w-fit border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
              >
                {headerGroup.headers.map((header, index) =>
                  index === 0 ? (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="flex items-center justify-center p-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </th>
                  ) : (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      draggable={
                        !table.getState().columnSizingInfo.isResizingColumn
                      }
                      data-column-index={header.index}
                      onDragStart={onDragStart}
                      onDragOver={(e) => {
                        e.preventDefault()
                      }}
                      onDrop={onDrop}
                      className="relative p-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          onClick={() => header.column.toggleSorting()}
                          className={
                            header.column.getCanSort()
                              ? 'flex cursor-pointer select-none items-center overflow-hidden text-ellipsis whitespace-nowrap'
                              : ''
                          }
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                          {
                            {
                              asc: <ArrowUpAz className="size-4" />,
                              desc: <ArrowDownAZ className="size-4" />,
                            }[header.column.getIsSorted() ?? null]
                          }
                        </div>
                      )}
                      <div
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()}
                        className="absolute right-0 top-0 h-full w-1 cursor-col-resize touch-none select-none rounded-md bg-muted"
                        {...{
                          style: {
                            transform:
                              columnResizeMode === 'onEnd' &&
                              header.column.getIsResizing()
                                ? `translateX(${
                                    table.getState().columnSizingInfo
                                      .deltaOffset
                                  }px)`
                                : '',
                          },
                        }}
                      />
                    </th>
                  ),
                )}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="flex w-fit border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  {row.getVisibleCells().map((cell, index) =>
                    index === 0 ? (
                      <td
                        key={cell.id}
                        className="flex items-center justify-center p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ) : (
                      <td
                        key={cell.id}
                        className="overflow-hidden whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"
                        style={{ width: cell.column.getSize() }}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </td>
                    ),
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length}>Sin resultados.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div>footer</div>
    </>
  )
}

export default index
