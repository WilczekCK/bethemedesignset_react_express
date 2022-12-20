import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const LayoutView__container = styled(Paper)(({ }) => ({
  width: '1240px',
  margin: '0 auto',
  boxShadow: 'unset'
}));

function DeviceSelectedButtons(props) {
  return (
    <ButtonGroup device={props.device} variant="outlined" aria-label="outlined button group">
      <Button onClick={() => props.setDevice('mobile')}> Mobile </Button>
      <Button onClick={() => props.setDevice('tablet')}> Tablet </Button>
      <Button onClick={() => props.setDevice('desktop')}> Desktop </Button>
    </ButtonGroup>
  )
}

function convertDeviceToPx(device){
  switch (device) {
    case 'desktop': return '1240px';
    case 'tablet':  return '784px';
    case 'mobile':  return '315px'
    default:        return '1240px';
  }
}

function Render() {
  const [device, setDevice] = React.useState('desktop'); // for DeviceSelectedButtons

  return (
    <LayoutView__container>
      <Grid2 container>
        <Grid2 md={12}>
          <DeviceSelectedButtons 
            device={device} 
            setDevice={setDevice}
          />
        </Grid2>

        <Grid2 md={12}>
          <IframeResizer
            log
            src="https://themes.muffingroup.com/be/marketing2/"
            style={{ width: convertDeviceToPx(device), height: '500px', transition: 'width .3s ease-in-out' }}
            scrolling={true}
          />
        </Grid2>
      </Grid2>
    </LayoutView__container>
  );
}

export default Render;
