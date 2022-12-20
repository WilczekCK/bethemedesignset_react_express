import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const LayoutView__container = styled(Paper)(({ }) => ({
  width: '1240px',
  margin: '0 auto',
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

function LayoutView() {
  const [device, setDevice] = React.useState('desktop'); // for DeviceSelectedButtons

  return (
    <LayoutView__container>
      <DeviceSelectedButtons 
        device={device} 
        setDevice={setDevice}
      />
      
      <IframeResizer
        log
        src="https://themes.muffingroup.com/be/marketing2/"
        style={{ width: '1240px' }}
        scrolling={true}
      />
    </LayoutView__container>
  );
}

export default LayoutView;
