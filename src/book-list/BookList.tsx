import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useApi } from '../api/ApiProvider';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 40 },
  { field: 'isbn', headerName: 'ISBN', width: 190 },
  { field: 'title', headerName: 'Title', width: 190 },
  { field: 'author', headerName: 'Author', width: 190 },
  { field: 'publisher', headerName: 'Publisher', width: 190 },
  {
    field: 'publicationYear',
    headerName: 'Publication Year',
    width: 130,
    align: 'center',
  },
  {
    field: 'available',
    headerName: 'Availability',
    width: 130,
    type: 'boolean',
  },
];

export default function DataTable() {
  const apiClient = useApi();

  apiClient?.getBooks().then((response) => {
    localStorage.setItem('books', JSON.stringify(response.data || []));
    console.log(response.data);
  });

  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={JSON.parse(localStorage.getItem('books') || '[]')}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
