import React, { useState } from 'react';
import IframeResizer from 'iframe-resizer-react';
import debounce from 'lodash.debounce';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';

import breakpoints from '../data/responsiveBreakpoints.json';
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

function setDeviceOnResize(props) {
    const debounceFn = debounce(() => {
      let devicesAvailable = useResponsiveDetect(); 
      props.setDevice(devicesAvailable.actualDeviceName);
    }, 100);
      
    window.addEventListener('resize', () => debounceFn() );
    window.removeEventListener('resize', () => debounceFn() );
}



function Render() {
  let devicesAvailable = useResponsiveDetect();
  const [device, setDevice] = useState(devicesAvailable.actualDeviceName); // for DeviceSelectedButtons

  setDeviceOnResize({device, setDevice});
    
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
            style={{ width: breakpoints[device], maxWidth:'90%', height: '500px', transition: 'width .3s ease-in-out' }}
            scrolling={true}
          />
        </Grid2>
      </Grid2>
  );
}

export default Render;
