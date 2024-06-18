import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomMenuIcon from './CustomMenuIcon';

function HomeAppBar() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <CustomMenuIcon />
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          {t('library')}
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
