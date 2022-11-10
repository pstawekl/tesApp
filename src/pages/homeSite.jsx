import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Grid, Icon } from '@mui/material';
import SlideToRight from '../builders/createContainers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';
import Fade from '@mui/material/Slide';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export const isDownloadVisible = false;


const IndexSite = () => {
  return (
    <div className='site'>
      <h1 style={{ position: 'fixed', left: 0, top: '100%' }}><a className='btnSlideDownBanner' onClick={() => document.getElementById('body').scrollTop({ behavior: 'smooth', block: 'start' })}>
        <FontAwesomeIcon icon={faCircleArrowUp} />
      </a></h1>
      <Banner />
      <About />
      <FadeInSection><AboutContent /></FadeInSection>
      <FadeInSection><Offer /></FadeInSection>
      {isDownloadVisible ? <FadeInSection><DownloadApp /></FadeInSection> : <div></div>}
      <Footer />
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
const Banner = () => {

  return (
    <div className="header">
      <Container style={{ maxWidth: 'none', margin: '0 auto', padding: '0' }}>
        <div className='banner'>
          <div className="bannerText" style={{ left: '0', right: '0', bottom: '0', top: '40%', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', margin: 0 }}>Witaj na stronie naszego biura  </h1>
            <h1 style={{ fontSize: '4rem', margin: 0 }}>Biuro Rachunkowe TES</h1>
            <h1 style={{ fontSize: '3rem', margin: 0 }}>w Zduńskiej Woli </h1>
            <h1 style={{ fontSize: '2rem', margin: 0 }}>Oferujemy najlepsze usługi w najlepszej cenie</h1>
            {/* <Button className='btnZaloguj' variant='contained' href="logIn">Zaloguj się do aplikacji</Button> */}
            <h1 style={{ marginTop: '20px' }}>
              <a className='btnSlideDownBanner' onClick={() => document.getElementById('AboutContent').scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                <FontAwesomeIcon icon={faCircleArrowDown} />
              </a>
            </h1>

          </div>
        </div>
      </ Container>
    </div>
  )
};

const About = (props) => {
  return (
    <Container
      style={{
        maxWidth: '100%',
        paddingBottom: '20px',
        paddingLeft: 0,
        paddingRight: 0,
        fontFamily: 'Roboto', fontWeight: 'Bold', padding: 0
      }}>
      <div className="about" id="About">
        <div className="containers">
          <Grid container
            spacing={0}
            direction='row'
            alignItems="center"
            justifyContent="center">
            <Grid item xs={3}>
              <SlideToRight className='container' boxWidth={'98%'} boxColor='#1976d2' title='Indywidualne podejście do klienta' content='Zaufaj naszej firmie i wypróbuj usługi, a przekonasz się, że Twoje dokumenty są w dobrych rękach.' checked={true} ></SlideToRight>
            </Grid>
            <Grid item xs={3}>
              <SlideToRight className='container' boxWidth='98%' boxColor='#1976d2' title='Odpowiedni Balans' content='Nasza firma to odpowiednio wyważony balans między rzetelną pracą, jej szybkością oraz ceną.' checked={true} ></SlideToRight>
            </Grid>
            <Grid item xs={3}>
              <SlideToRight className='container' boxWidth='98%' boxColor='#1976d2' title='Zawsze na Czas' content='Oferujemy profesjonalną i rzetelną obsługę, zawsze w terminie.' checked={true} ></SlideToRight>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  )
};

const AboutContent = () => {
  return (
    <div id="AboutContent">
      <Fade in direction="right" timeout={1000}>
        <Grid container spacing={0}>
          <Grid style={{ paddingTop: '20px' }} item xs={15}>

            <h1>Nasze biuro rachunkowe jest podmiotem wyspecjalizowanym</h1>
            <span>Działamy na rynku od 2000 roku na bazie doświadczeń zawodowych zdobytych przez założycieli firmy.
              Posiadamy uprawnienia potwierdzone wpisem na "listę osób uprawnionych do usługowego prowadzenia ksiąg rachunkowych".
              Od początku działalności szczególną wagę przywiązujemy do jakości świadczonych przez nas usług. Z większością naszych klientów współpracujemy od początku
              istnienia firmy do chwili obecnej, co doceniamy i z czego jesteśmy niezmiernie dumni. </span> <br />
            <span>Prowadzimy podatkowe księgi przychodów i rozchodów (KPiR) oraz pełne księgi rachunkowe.
              Obsługujemy firmy z terenu Zduńskiej Woli i okolic. Na życzenie Klienta odbieramy dokumenty z jego siedziby.</span> <br />
            <span>Wysoką jakość świadczonych usług zapewnia profesjonalnie dobrana kadra pracownicza, korzystająca z możliwości jakie stwarza firma - stałego dostępu
              do najnowszych publikacji oraz specjalistycznych serwisów informacyjnych </span>

            <h1>
              <a className='btnSlideDownBannerSecondary' onClick={() => document.getElementById('Offer').scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                <FontAwesomeIcon style={{ marginLeft: '47.5%', marginTop: '100px' }} icon={faCircleArrowDown} />
              </a>
            </h1>
          </Grid>
        </Grid>
      </Fade>
    </div>
  )
}

const Offer = () => {
  return (
    <Container style={{
      maxWidth: 'none',
      paddingBottom: '20px',
      paddingLeft: 0,
      paddingRight: 0,
      fontFamily: 'Roboto', fontWeight: 'Bold'
    }}>
      <div className='Offer' id="Offer" style={{ fontWeight: 'Bold' }}>
        <Grid container>
          <Grid item xs={5}>

            <h1>Nasza oferta</h1>

            <span>Oferujemy pełen zakres usług księgowych dla: <br />
              - osób fizycznych (podatkowa księga przychodów i rozchodów, ryczałt ewidencjonowany, i inne) <br />
              - spółek z o.o., <br />
              - spółek akcyjnych, <br />
              - fundacji, <br />
              - stowarzyszeń, <br />
              - spółek jawnych,<br />
              - spółek komandytowych,<br />
              - spółek cywilnych,<br />
              - wspólnot mieszkaniowych,<br />
              - innych podmiotów prowadzących pełną księgowość,<br />
              <br />
              <ul>
                <li>Księgi Przychodów i Rozchodów</li>
                <li>Księgi Rachunkowe</li>
                <li>Obsługa Kadrowo Płacowa</li>
                <li>Pełna Obsługa Podatkowa</li>
              </ul>
            </span>
          </Grid>
          <Grid item xs={5}>
            <FadeInSection><div className="offerImg" style={{ marginTop: '20%', marginLeft: '30%' }}>
              <img className='documentImg' src="document.png" alt="checked document"
                style={{ width: '60%', height: 'auto', filter: 'drop-shadow(15px 15px 6px #4444dd)' }} />
            </div></FadeInSection>
          </Grid>
          {/* <Grid item xs={10}>
            <h1>
              <a className='btnSlideDownBannerSecondary' onClick={() => document.getElementById('DownloadApp').scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                <FontAwesomeIcon style={{ marginLeft: '56.5%', marginTop: '100px' }} icon={faCircleArrowDown} />
              </a>
            </h1>
          </Grid> */}
        </Grid>
      </div>
    </Container>
  )
}

const DownloadApp = () => {
  return (
    <Container style={{
      marginTop: '-20px',
      maxWidth: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: '50px',
      paddingBottom: '20px',
      fontFamily: 'Roboto', fontWeight: 'Bold',
      backgroundColor: 'white',
      color: 'black'
    }}>
      <Grid container id="DownloadApp">
        <Grid item xs={10} style={{ marginLeft: "250px" }}>
          <h1>Twoje Biuro</h1>
        </Grid>
        <Grid item xs={10} style={{ marginLeft: '250px', marginTop: '20px' }}>
          <span>
            Nadchodzi era cyfryzacji! Skorzystaj z naszej aplikacji "Twoje Biuro", aby przesłać do naszego biura wszystkie dokumenty. <br />
            Twoje biuro to aplikacja pozwalająca na zarządzanie Twoimi dokumentami i bezpieczny przesył do naszego biura, szybki kontakt z naszymi księgowymi oraz uzyskanie porad prawnych na temat rozliczeń. <br />

            <img src="" alt="@photo" srcset="" /><img src="" alt="@photo" srcset="" /><img src="" alt="@photo" srcset="" /> <br />

            <Button variant='outlined' style={{ marginLeft: '40%' }}>Pobierz</Button>
          </span>
        </Grid>
      </Grid>
    </Container>
  )
}

const Footer = () => {
  return (
    <Container style={{
      marginTop: '-20px',
      maxWidth: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: '50px',
      paddingBottom: '20px',
      fontFamily: 'Roboto', fontWeight: 'Bold',
      backgroundColor: '#616161',
      color: 'white'
    }}>
      <Grid container>
        <Grid style={{ marginLeft: '3%' }} item xs={2}>
          <h1>Kontakt: </h1>
          <a href="tel:501668545" style={{ textDecoration: 'none', color: 'white' }}>tel. +48 501668545</a> <br />
          mail. rachunkowe@r-biuro.pl <br />
        </Grid>
        <Grid item xs={2}>
          <h1>Adres:</h1>
          ul. Żeromskiego 7/9, <br />
          Zduńska Wola, 98-220 <br />
          (wejście od ul. Przejazd)
        </Grid>
        <Grid item xs={3}>
          <p style={{ paddingLeft: '35%', paddingTop: '20%' }}><a class='interactive' href="http://interactive.net.pl" target={'blank'}>Made by Interactive</a></p>
        </Grid>
        <Grid style={{ marginLeft: '10%' }} item xs={3}>
          <h1 style={{ fontFamily: 'Roboto', fontWeight: 'Bold' }}>FUPH TES</h1>
          <h3>Jesteśmy najlepsi, bo działamy z pasją.</h3>
        </Grid>
      </Grid>
    </Container>
  )
}

export default IndexSite;