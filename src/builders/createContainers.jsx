import * as React from 'react';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';

export default function SlideToRight(props) {
    const [checked, setChecked] = React.useState(false);
    const containerRef = React.useRef(null);


    return (
      <Fade in timeout={2000}>
        <Box sx={{ width: props.boxWidth}} className="containerParent"> 
        <Box
          ref={containerRef}
          style={{
            backgroundColor: 'transparent',
            width: props.boxWidth,

            overflow: 'hidden',
          }}
        >
            <Slide direction="left" in={props.checked} container={containerRef.current} timeout={1000}>
            <Box sx={{ width: '100%', height: '100%', bgcolor: props.boxColor }}> <div className="container"> <Fade in={true} timeout={4000}><img id='containerImg' src={props.img} /></Fade> <h2>{props.title}</h2><span>{props.content}</span></div> </Box>
            </Slide>
        </Box>
      </Box>
      </Fade>
    );
  }
  