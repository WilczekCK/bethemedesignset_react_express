import React, { useState } from "react";
import debounce from 'lodash.debounce';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";

import useResponsiveDetect from '../../hooks/useResponsiveDetect';
import MenuRegular from './MenuRegular'
import MenuHamburger from './MenuHamburger'

const Logo = styled(Paper)(({ }) => ({
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'var(--gradientBe)',
    boxShadow: 'none',
    fontWeight: 700,
    fontSize:'32px',
    textAlign: 'center'
}));

const Item = styled(Paper)(({ }) => ({
    textAlign: 'center',
    color: 'white',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundImage: 'var(--gradientBe)',
      boxShadow: 'none',
      textAlign: 'center',
      transition: 'all .3s ease-in-out'
    }
  }));

function setDeviceOnResize(props) {
    const debounceFn = debounce(() => {
      let devicesAvailable = useResponsiveDetect(); 
      props.setDevice(devicesAvailable.actualDeviceName);
    }, 100);
      
    window.addEventListener('resize', () => debounceFn() );
    window.removeEventListener('resize', () => debounceFn() );
}

function NavBar(){
    let devicesAvailable = useResponsiveDetect();
    const [device, setDevice] = useState(devicesAvailable.actualDeviceName); // for DeviceSelectedButtons
    setDeviceOnResize({device, setDevice});


    return (
        <Grid2 container backgroundColor="var(--backgroundDarkerGrey)" minHeight={90} md={12} display="flex" alignContent="center">
            <Grid2 container md={2} lg={2} xs={4} mdOffset={1} xsOffset={1} >
                <Link to="/" style={{fontWeight: 700, textDecoration: 'none'}}> 
                    <Logo>Be</Logo>
                    <Item style={{marginTop: '-5px'}}>
                        Design Set
                    </Item>
                </Link>
            </Grid2>
            
            {device === 'desktop' ? <MenuRegular/> : <MenuHamburger/>}
        </Grid2>
    )
}

export default NavBar;