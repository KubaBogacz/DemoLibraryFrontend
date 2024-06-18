import React, { useState } from 'react';
import CustomMenuIcon from './CustomMenuIcon'; // Adjust the import path as necessary
import BookList from '../book-list/BookList';
import LoanList from '../loan-list/LoanList';
import { Home } from '@mui/icons-material';
import { Box } from '@mui/material';
import HomeAppBar from '../home-app-bar/HomeAppBar';

function HomePage() {
  const [currentView, setCurrentView] = useState('books');

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <Box>
      <HomeAppBar />
      <CustomMenuIcon changeView={changeView} />
      {currentView === 'books' && <BookList />}
      {currentView === 'loans' && <LoanList />}
    </Box>
  );
}

export default HomePage;
