import React from 'react';
import styles from './posts.module.css'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'body', headerName: 'Content', width: 130 },
  {
    field: 'userId',
    headerName: 'User Id',
    type: 'number',
    width: 90,
  },
  {
    field: 'Edit',
    headerName: 'Edit',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];



const Posts = ({ datas }) => {
  console.log(datas);

  const rows =datas.map((item) => ({
    id: item.id,
    title: item.title,
    body: item.body,
    userId: item.userId,
  }));

  return (
    <div className={styles.container}>
       <div style={{ height: 400, width: '100%' }}>

       {datas &&
       <DataGrid
       rows={rows}
       columns={columns}
       initialState={{
         pagination: {
           paginationModel: { page: 0, pageSize: 5 },
         },
       }}
       pageSizeOptions={[5, 10]}
       checkboxSelection
     />
}

      
    </div>
     
    </div>
  );
};

export default Posts;
