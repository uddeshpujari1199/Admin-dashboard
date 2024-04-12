import React, { useState } from 'react'
import './dataTable.css'
import { DataGrid } from '@mui/x-data-grid';
import { userColums,userRows } from '../Screen/TempData';




function DataTable() {
  function heandleDelet(id){
   alert(id)
  }

  
  const actionColoum=[
    {
      field:"action",
      headerName:"Action",
      width:200,
      renderCell:(params)=>{
        return(
          <div className='cellActive'>
            <div className='ViewButton' >View</div>
            <div className='DeleteButton' onClick={()=>heandleDelet()}>Delete
            </div>
          </div>
        )
      },
    },
  ];
  return (
    <div className='dataTable'>
      <DataGrid
        rows={userRows}
        columns={userColums.concat(actionColoum)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable