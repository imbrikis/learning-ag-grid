import React from 'react'
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import {tabledata} from '../data/tableData'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const defaultColDef = {sortable: true, flex: 1}
const columnTypes = {
  main: {
    editable: true
  }
}

const Table = () => {
  return (
    <div>
      <h1>AG Grid Table</h1>
      <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
        <AgGridReact rowData={tabledata} columnTypes={columnTypes} defaultColDef={defaultColDef}>
          <AgGridColumn field="name" />
          <AgGridColumn field="id" type="main" />
          <AgGridColumn field="location" type="main" />
        </AgGridReact>
      </div>
    </div>
  )
}

export default Table
