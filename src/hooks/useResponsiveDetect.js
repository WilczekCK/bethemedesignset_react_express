import { useState, useEffect } from 'react';
import breakpoints from '../data/responsiveBreakpoints.json';
import debounce from 'lodash.debounce';

function getDevicesStatus(){
    const px = window.innerWidth;
    let mobile  = false;
    let tablet  = false;
    let desktop = false;

    // Just for double-check, bcuz no TS
    breakpoints.mobile = parseInt(breakpoints.mobile);
    breakpoints.tablet = parseInt(breakpoints.tablet);

    switch(true){
        case (px > 0 && px < breakpoints.mobile):
            mobile = true;
            break;
        case (px >= breakpoints.mobile && px < breakpoints.tablet):
            tablet = true;
            break;
        case (px >= breakpoints.tablet):
            desktop = true;
            break;
        default:
            break;
    }

    return {mobile, tablet, desktop}
}

function getActiveDeviceName(devicesStatus = false){
    if (!devicesStatus) devicesStatus = getDevicesStatus();
  
    const deviceArrayKey = Object.keys(devicesStatus);
    const deviceActiveName = deviceArrayKey.filter((key) => devicesStatus[key]);
  
    return deviceActiveName[0];
  }

export default function Render(){
    const actualDevicesStatus = getDevicesStatus();
    const [device, setDevice] = useState( actualDevicesStatus );

    useEffect(() => {
        const debounceFn = debounce(() => {
            setDevice(getDevicesStatus())
        }, 100);
        
        window.addEventListener('resize', () => { debounceFn() });
        return () => window.removeEventListener('resize', debounceFn() );
    }, [])

    return {...device, actualDeviceName: getActiveDeviceName()};
}