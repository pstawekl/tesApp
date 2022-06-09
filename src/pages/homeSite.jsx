import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Grid, Icon } from '@mui/material';
import SlideToRight from '../builders/createContainers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from '@mui/material/Slide';

const IndexSite = () => {
  return (
    <div className='site'>
      <Banner />
      <FadeInSection><About /></FadeInSection>
      <FadeInSection><AboutContent /></FadeInSection>
      <FadeInSection><Offer /></FadeInSection>

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
          <div className="bannerText" style={{ left: '0', right: '0', bottom: '0', top: '30%', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', margin: 0 }}>Witaj na stronie naszego biura  </h1>
            <h1 style={{ fontSize: '4rem', margin: 0 }}>Biuro Rachunkowe TES</h1>
            <h1 style={{ fontSize: '3rem', margin: 0 }}>w Zduńskiej Woli </h1>
            <h1 style={{ fontSize: '2rem', margin: 0 }}>Oferujemy najlepsze usługi w najlepszej cenie</h1>
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
              <SlideToRight className='container' boxWidth={'98%'} boxColor='#1976d2' title='Indywidualne podejście do klienta' content='Zaufaj naszej firmie i wypróbuj usługi, a przekonasz się, że Twoje dokumenty są w dobrych rękach.' img='individualClient.png' checked={true} ></SlideToRight>
            </Grid>
            <Grid item xs={3}>
              <SlideToRight className='container' boxWidth='98%' boxColor='#1976d2' title='Odpowiedni Balans' content='Nasza firma to odpowiednio wyważony balans między rzetelną pracą, jej szybkością oraz ceną.' img='balance.png' checked={true} ></SlideToRight>
            </Grid>
            <Grid item xs={3}>
              <SlideToRight className='container' boxWidth='98%' boxColor='#1976d2' title='Zawsze na Czas' content='Oferujemy profesjonalną i rzetelną obsługę, zawsze w terminie.' img='onTime.png' checked={true} ></SlideToRight>
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
          <Grid item xs={15}>

            <h1>Nasze biuro rachunkowe jest podmiotem wyspecjalizowanym</h1>
            <span>Działamy na rynku od 2000 roku na bazie doświadczeń zawodowych zdobytych przez założycieli firmy.
              Posiadamy uprawnienia potwierdzone wpisem na "listę osób uprawnionych do usługowego prowadzenia ksiąg rachunkowych".
              Od początku działalności szczególną wagę przywiązujemy do jakości świadczonych przez nas usług. Z większością naszych klientów współpracujemy od początku
              istnienia firmy do chwili obecnej, co doceniamy i z czego jesteśmy niezmiernie dumni. </span> <br />
            <span>Prowadzimy podatkowe księgi przychodów i rozchodów (KPiR) oraz pełne księgi rachunkowe.
              Obsługujemy firmy z terenu Zduńskiej Woli i okolic. Na życzenie Klienta odbieramy dokumenty z jego siedziby.</span> <br />
            <span>Wysoką jakość świadczonych usług zapewnia profesjonalnie dobrana kadra pracownicza, korzystająca z możliwości jakie stwarza firma - stałego dostępu
              do najnowszych publikacji oraz specjalistycznych serwisów informacyjnych </span>

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
              - fundacjif, <br />
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
        </Grid>
      </div>
    </Container>
  )
}

export default IndexSite;