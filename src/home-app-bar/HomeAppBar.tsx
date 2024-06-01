import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useNavigate } from 'react-router-dom';

function HomeAppBar() {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Library
        </Typography>
        <IconButton
          aria-label="account"
          aria-haspopup="true"
          aria-controls="menu-appbar"
          onClick={() => navigate('/login')}
          color="inherit"
        >
          <PersonRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HomeAppBar;
