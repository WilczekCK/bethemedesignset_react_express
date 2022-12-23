import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';

import responsiveDetect from '../hooks/useResponsiveDetect'

function DeviceSelectedButtons(props) {
  const actualDevice = responsiveDetect();

  return (
    <ButtonGroup device={props.device} aria-label="outlined button group">
      <Button 
        onClick={() => props.setDevice('mobile')}
        variant={props.device === 'mobile' ? 'contained' : 'outlined'}
        >
          <StayCurrentPortraitIcon/>
      </Button>
      
      <Button 
        onClick={() => props.setDevice('tablet')}
        disabled={actualDevice.isMobile}
        variant={props.device === 'tablet' ? 'contained' : 'outlined'}
        > 
          <TabletMacIcon/>
      </Button>
      
      <Button 
        onClick={() => props.setDevice('desktop')}
        disabled={actualDevice.isMobile || actualDevice.isTablet}
        variant={props.device === 'desktop' ? 'contained' : 'outlined'}
        > 
          <PersonalVideoIcon/>
      </Button>
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
      <Grid2 container direction={'column'} alignItems={'center'}>
        <Grid2 md={12} xs={12}>
          <DeviceSelectedButtons 
            device={device} 
            setDevice={setDevice}
          />
        </Grid2>

        <Grid2 md={12} >
          <IframeResizer
            log
            src="https://themes.muffingroup.com/be/marketing2/"
            style={{ width: convertDeviceToPx(device), height: '500px', transition: 'width .3s ease-in-out' }}
            scrolling={true}
          />
        </Grid2>
      </Grid2>
  );
}

export default Render;
