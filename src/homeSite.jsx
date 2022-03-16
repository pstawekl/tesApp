import * as React from 'react';
import {useEffect} from 'react';
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
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Grid, Icon} from '@mui/material';
import SlideToRight from './createContainers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function indexSite(){
  return (
      <div className='site'>
      <FadeInSection children={<Banner></Banner>}></FadeInSection>
      <FadeInSection children={<About></About>}></FadeInSection>
      <FadeInSection children={<Offer></Offer>}></FadeInSection>
      <SlideDown></SlideDown>
      </div>
  )
}

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

const IfLogIn = false;

//menu
const pages = ['Home', 'About', 'Offer'];
var settings = [];

//menu na avatarze
if(IfLogIn == false){
    settings= ['Zaloguj się', 'Zarejestruj się', 'Pomoc'];
}else{
    settings = ['Profil', 'Zarządzaj kontem', 'Pomoc', 'Wyloguj się'];
}

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Avatar" src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" />
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const Banner = () => {
  const appBar = ResponsiveAppBar();
 
  return(
    <div className="topSite">
      <Container style={{maxWidth: 'none', margin: '0', padding: '0'}}>  {appBar} </Container>
      <Container style={{maxWidth: 'none', margin: '0', padding: '0'}}>
        <div className='banner'>
          <div className="bannerText" style={{left: '0', right: '0', bottom: '0', top: '30%', margin: '0 auto'}}>
            <h1 style={{fontSize: '2rem', margin: 0}}>Witaj na stronie naszego biura  </h1>
            <h1 style={{fontSize:'4rem', margin: 0}}>Biuro Rachunkowe TES</h1>
            <h1 style={{fontSize:'3rem', margin: 0}}>w Zduńskiej Woli </h1>
            <h1 style={{fontSize:'2rem', margin: 0}}>Oferujemy najlepsze usługi w najlepszej cenie</h1>
            <Button className='btnZaloguj' variant='contained' href="#">Zaloguj się do aplikacji</Button> 
          </div>       
        </div>
      </ Container> 
    </div>
  )
};

const About = (props) => {
  //props: boxWidth, boxColor, checked
  return (
      <Container style={{maxWidth: 'none', 
    paddingBottom: '20px', 
    paddingLeft:0, 
    paddingRight: 0, 
    fontFamily: 'Roboto', fontWeight: 'Bold', margin: 0, padding: 0}}>
    <div className="about" id="about">
      <Grid container 
        spacing={0}
        direction='row'
        alignItems="center"
        justifyContent="center">
        <Grid item xs={3}>
        <SlideToRight  className='container' boxWidth={'98%'} boxColor='#1976d2' title='Indywidualne podejście do klienta' content='Zaufaj naszej firmie i wypróbuj usługi, a przekonasz się, że Twoje dokumenty są w dobrych rękach.' img='individualClient.png' checked={true} ></SlideToRight>                
        </Grid>
        <Grid item xs={3}>
         <SlideToRight className='container' boxWidth='98%' boxColor='#1976d2' title='Odpowiedni Balans' content='Nasza firma to odpowiednio wyważony balans między rzetelną pracą, jej szybkością oraz ceną.' img='balance.png' checked={true} ></SlideToRight>
        </Grid>
        <Grid item xs={3}>
         <SlideToRight className='container' boxWidth='98%' boxColor='#1976d2' title='Zawsze na Czas' content='Oferujemy profesjonalną i rzetelną obsługę, zawsze w terminie.' img='onTime.png' checked={true} ></SlideToRight>
        </Grid>
      </Grid><div id="AboutContent">
        <h1>Nasze biuro rachunkowe jest podmiotem wyspecjalizowanym</h1>
        <span>Działamy na rynku od 2000 roku na bazie doświadczeń zawodowych zdobytych przez założycieli firmy. 
          Posiadamy uprawnienia potwierdzone wpisem na "listę osób uprawnionych do usługowego prowadzenia ksiąg rachunkowych".
          Od początku działalności szczególną wagę przywiązujemy do jakości świadczonych przez nas usług. Z większością naszych klientów współpracujemy od początku 
          istnienia firmy do chwili obecnej, co doceniamy i z czego jesteśmy niezmiernie dumni. </span> <br />
        <span>Prowadzimy podatkowe księgi przychodów i rozchodów (KPiR) oraz pełne księgi rachunkowe.
          Obsługujemy firmy z terenu Zduńskiej Woli i okolic. Na życzenie Klienta odbieramy dokumenty z jego siedziby.</span> <br />
        <span>Wysoką jakość świadczonych usług zapewnia profesjonalnie dobrana kadra pracownicza, korzystająca z możliwości jakie stwarza firma - stałego dostępu 
          do najnowszych publikacji oraz specjalistycznych serwisów informacyjnych </span>
      </div>
    </div>
    </Container>
  )
};

const Offer = () => {
  return (
    <Container style={{maxWidth: 'none', 
    paddingBottom: '20px', 
    paddingLeft:0, 
    paddingRight: 0, 
    fontFamily: 'Roboto', fontWeight: 'Bold', margin: 0, padding: 0}}>
    <div className='offer'>Oferujemy pełen zakres usług księgowych dla:

- osób fizycznych (podatkowa księga przychodów i rozchodów, ryczałt ewidencjonowany, i inne)
- spółek z o.o.,
- spółek akcyjnych,
- fundacji,
- stowarzyszeń,
- spółek jawnych,
- spółek komandytowych,
- spółek cywilnych,
- wspólnot mieszkaniowych,
- innych podmiotów prowadzących pełną księgowość,

Księgi Przychodów i Rozchodów
Księgi Rachunkowe
Obsługa Kadrowo Płacowa
Pełna Obsługa Podatkowa</div>
    </Container>
  )
}

const SlideDown = () => {
  return (
    <Icon style={{position: 'fixed', left: 0, right: 0, bottom: 0, margin: '0 auto'}}><FontAwesomeIcon icon="fas fa-arrow-down" /></Icon>
  )
}


export default indexSite;