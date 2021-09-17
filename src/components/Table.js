import React from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import {tabledata} from '../data/tableData'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const defaultColDef = {sortable: true, flex: 1}
const columnTypes = {
  main: {
    editable: true,
    filter: true
  },
  isFilterable: {
    filter: true
  }
}

const Table = () => {
  return (
    <>
      <header>AG Grid Table</header>
      <div className="ag-theme-alpine table-wrapper">
        <AgGridReact rowData={tabledata} columnTypes={columnTypes} defaultColDef={defaultColDef} rowSelection={'multiple'}>
          <AgGridColumn headerName="NES Game" field="name" />
          <AgGridColumn headerName="Publisher" field="publisher" type="isFilterable" />
          <AgGridColumn headerName="Metadata">
            <AgGridColumn field="year" type="main" />
            <AgGridColumn field="developer" type="main" />
          </AgGridColumn>
        </AgGridReact>
      </div>
    </>
  )
}

export default Table
