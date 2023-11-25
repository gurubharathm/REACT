import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export function DataGridCommon(props) {
  const { columns, rows } = props;
  return (
    <Box className="bg-box" sx={{ }}>
      <DataGrid
       //slots={{toolbar: GridToolbarComponent}}
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        //disableRowSelectionOnClick
        //disableColumnMenu
        //checkboxSelection
      />
    </Box>
  );
}
// export function GridToolbarComponent() {
//   return (
//     <GridToolbar style={{ marginBottom: '20px', marginTop:"5px", alignSelf:"center" }} />
//   );
// }