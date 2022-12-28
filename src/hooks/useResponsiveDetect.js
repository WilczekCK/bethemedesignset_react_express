import breakpoints from '../data/responsiveBreakpoints.json';

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
    return {...getDevicesStatus(), actualDeviceName: getActiveDeviceName()};
}