import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useApi } from '../api/ApiProvider';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

export default function DataTable() {
  const { t } = useTranslation();
  const apiClient = useApi();
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    [],
  );
  const [loanDate, setLoanDate] = useState('');

  useEffect(() => {
    apiClient?.getBooks().then((response) => {
      localStorage.setItem('books', JSON.stringify(response.data || []));
      console.log(response.data);
    });
  }, [apiClient]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: t('id'), width: 40 },
    { field: 'isbn', headerName: t('isbn'), width: 190 },
    { field: 'title', headerName: t('title'), width: 190 },
    { field: 'author', headerName: t('author'), width: 190 },
    { field: 'publisher', headerName: t('publisher'), width: 190 },
    {
      field: 'publicationYear',
      headerName: t('publicationYear'),
      width: 130,
      align: 'center',
    },
    {
      field: 'available',
      headerName: t('available'),
      width: 130,
      type: 'boolean',
    },
  ];

  const handleLendBooks = () => {
    selectionModel.forEach((id) => {
      apiClient?.borrowBook(id as number, loanDate);
    });
    // Clear the selection and loan date input after lending the books
    setSelectionModel([]);
    setLoanDate('');
  };

  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={JSON.parse(localStorage.getItem('books') || '[]')}
        columns={columns}
        checkboxSelection
        onRowSelectionModelChange={(newSelectionModel) => {
          setSelectionModel(newSelectionModel);
        }}
        rowSelectionModel={selectionModel}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />

      <TextField
        label={t('loanDate')}
        type="date"
        value={loanDate}
        onChange={(e) => setLoanDate(e.target.value)}
        sx={{ mx: 2, mt: 3 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        onClick={handleLendBooks}
        disabled={selectionModel.length === 0}
        variant="contained"
        color="inherit"
        sx={{ mx: 2, mt: 3 }}
      >
        {t('loanBooks')}
      </Button>
    </div>
  );
}
