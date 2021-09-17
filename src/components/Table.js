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
          <AgGridColumn headerName="NES Game" field="name" />
          <AgGridColumn headerName="Publisher" field="publisher" />
          <AgGridColumn headerName="Metadata">
            <AgGridColumn field="year" type="main" />
            <AgGridColumn field="developer" type="main" />
          </AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  )
}

export default Table
