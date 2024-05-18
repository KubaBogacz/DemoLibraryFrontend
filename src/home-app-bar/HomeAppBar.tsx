import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

function HomeAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <h2>Library</h2>
        <IconButton>
          <PersonRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default HomeAppBar;
