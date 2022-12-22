import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

function getActualDevice(){
    const px = window.innerWidth;
    let isMobile  = false;
    let isTablet  = false;
    let isDesktop = false;

    switch(true){
        case (px > 0 && px < 768):
            isMobile = true;
            break;
        case (px >= 768 && px < 1240):
            isTablet = true;
            break;
        case (px >= 1240):
            isDesktop = true;
            break;
        default:
            break;
    }

    return {isMobile, isTablet, isDesktop}
}

export default function Render(){
    const [device, setDevice] = useState(getActualDevice());

    useEffect(() => {
        const debounceFn = debounce(() => {
            setDevice(getActualDevice())
        }, 100);
        
        window.addEventListener('resize', () => { debounceFn() });
        return () => window.removeEventListener('resize', debounceFn() );
    }, [])

    return device;
}