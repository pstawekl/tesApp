import './App.css';
import React, { useState } from 'react';
import IndexSite from './pages/homeSite';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './style.css'
import { isDownloadVisible } from './pages/homeSite';

export function App() {
  //menu
  return (
    <div>
      <IndexSite />
    </div>
  );
}

export function ResponsiveAppBar() {
  const [token, setToken] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = [
  <a style={{ textDecoration: 'none', color: 'white' }} class='navButton' href="/">Home</a>,
  <a class='navButton' style={{ textDecoration: 'none', color: 'white' }} onClick={() => document.getElementById('AboutContent').scrollIntoView({ behavior: 'smooth', block: 'center' })}>O nas</a>,
  <a class='navButton' style={{ textDecoration: 'none', color: 'white' }} onClick={() => document.getElementById('Offer').scrollIntoView({ behavior: 'smooth', block: 'end' })}>Oferta</a>,
  ];
  
  if(isDownloadVisible){
    pages.push(<a class='navButton' style={{ textDecoration: 'none', color: 'white' }} onClick={() => document.getElementById('DownloadApp').scrollIntoView({ behavior: 'smooth', block: 'end' })}>Pobierz</a>)
  }

  var settings = [];

  const navProfStyle = { textDecoration: 'none', color: 'black' };
  //menu na avatarze
  if (token == false) {
    settings = [<a href='/logIn' class='navButton' style={navProfStyle}>Zaloguj się</a>,
    <a href="/registerSite" class='navButton' style={navProfStyle}>Zarejestruj się</a>];
  }
  else {
    settings = [<a href="/profile" class='navButton' style={navProfStyle}>Profil</a>, <a href='/logOut' class='navButton' style={navProfStyle}>Wyloguj się</a>];
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className="appBar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            TES
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            TES
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} onclick={() => {

          }}>
            {pages.map((page) => (
              <Button

                key={page}
                // onClick={}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar className='Avatar' alt="Avatar" src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};