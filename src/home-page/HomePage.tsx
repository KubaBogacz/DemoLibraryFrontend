import { Box } from '@mui/material';
import HomeAppBar from '../home-app-bar/HomeAppBar';
import BookList from '../book-list/BookList';

function HomePage() {
  return (
    <Box>
      <HomeAppBar />
      <BookList />
    </Box>
  );
}

export default HomePage;
