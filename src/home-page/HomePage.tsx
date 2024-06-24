import { Box } from '@mui/material';
import HomeAppBar from '../home-app-bar/HomeAppBar';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <Box>
      <HomeAppBar />
      <Outlet />
    </Box>
  );
}

export default HomePage;
