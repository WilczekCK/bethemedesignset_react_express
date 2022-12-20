import { useEffect } from 'react';

function getActualDevice(){
    const px = window.innerWidth;
    let isMobile  = false;
    let isTablet  = false;
    let isDesktop = false;
    console.log(px);

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
    useEffect(() => {
        window.addEventListener('resize', getActualDevice);
        return () => window.removeEventListener('resize', getActualDevice);
    }, [])

    return getActualDevice();
}