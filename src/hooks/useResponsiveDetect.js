import { useState, useEffect } from 'react';
import breakpoints from '../data/responsiveBreakpoints.json';
import debounce from 'lodash.debounce';

function getActualDevice(){
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

export default function Render(){
    const [device, setDevice] = useState(getActualDevice());

    // console.log(breakpoints);

    useEffect(() => {
        const debounceFn = debounce(() => {
            setDevice(getActualDevice())
        }, 100);
        
        window.addEventListener('resize', () => { debounceFn() });
        return () => window.removeEventListener('resize', debounceFn() );
    }, [])

    return device;
}