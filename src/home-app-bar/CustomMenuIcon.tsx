import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomMenuIcon = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isAdmin = () => {
    const token = localStorage.getItem('token');
    return token && JSON.parse(atob(token.split('.')[1])).role === 'ROLE_ADMIN';
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    handleClose();
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon color="inherit" sx={{ mr: 2 }} />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate('/books')}>
          {t('listOfBooks')}
        </MenuItem>
        {isAdmin() && (
          <MenuItem onClick={() => navigate('/loans')}>
            {t('listOfLoans')}
          </MenuItem>
        )}
        <Divider />
        <MenuItem onClick={() => changeLanguage('pl')}>{t('polish')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>{t('english')}</MenuItem>
      </Menu>
    </div>
  );
};

export default CustomMenuIcon;
