import React, { useState, useEffect } from 'react';
import IframeResizer from 'iframe-resizer-react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';

import useResponsiveDetect from '../hooks/useResponsiveDetect'

function DeviceSelectedButtons(props) {
  return (
    <ButtonGroup aria-label="outlined button group">
      <Button 
        onClick={() => props.setDevice('mobile')}
        variant={props.deviceSelected === 'mobile' ? 'contained' : 'outlined'}
        >
          <StayCurrentPortraitIcon/>
      </Button>
      
      <Button 
        onClick={() => props.setDevice('tablet')}
        disabled={props.devicesAvailable.mobile}
        variant={props.deviceSelected === 'tablet' ? 'contained' : 'outlined'}
        > 
          <TabletMacIcon/>
      </Button>
      
      <Button 
        onClick={() => props.setDevice('desktop')}
        disabled={props.devicesAvailable.mobile || props.devicesAvailable.tablet}
        variant={props.deviceSelected === 'desktop' ? 'contained' : 'outlined'}
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
  const devicesAvailable = useResponsiveDetect();
  const [device, setDevice] = useState(devicesAvailable); // for DeviceSelectedButtons
  
  return (
      <Grid2 container direction={'column'} alignItems={'center'}>
        <Grid2 md={12} xs={12}>
          <DeviceSelectedButtons 
            deviceSelected={device}
            devicesAvailable={devicesAvailable}
            setDevice={setDevice}
          />
        </Grid2>

        <Grid2 md={12} >
          <IframeResizer
            log={false}
            src="https://themes.muffingroup.com/be/marketing2/"
            style={{ width: convertDeviceToPx(device), height: '500px', transition: 'width .3s ease-in-out' }}
            scrolling={true}
          />
        </Grid2>
      </Grid2>
  );
}

export default Render;
