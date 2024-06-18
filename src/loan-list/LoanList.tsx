import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useApi } from '../api/ApiProvider';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function LoanList() {
  const { t } = useTranslation();
  const apiClient = useApi();
  const [selectionModel, setSelectionModel] = useState<GridRowSelectionModel>(
    [],
  );

  useEffect(() => {
    apiClient?.getLoans().then((response) => {
      localStorage.setItem('loans', JSON.stringify(response.data || []));
      console.log(response.data);
    });
  }, [apiClient]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: t('id'), width: 70 },
    { field: 'loan_date', headerName: t('loanDate'), width: 130 },
    { field: 'book_id', headerName: t('bookId'), width: 130 },
  ];

  const handleReturnBooks = () => {
    selectionModel.forEach((id) => {
      apiClient?.returnBook(id as number);
    });
    // Clear the selection after returning the books
    setSelectionModel([]);
  };

  return (
    <div style={{ height: 630, width: '100%' }}>
      <DataGrid
        rows={JSON.parse(localStorage.getItem('loans') || '[]')}
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
      <Button
        onClick={handleReturnBooks}
        disabled={selectionModel.length === 0}
        variant="contained"
        color="inherit"
        sx={{ mx: 2, mt: 3 }}
      >
        {t('returnBooks')}
      </Button>
    </div>
  );
}
