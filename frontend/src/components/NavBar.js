import React, { useState } from "react";
import debounce from 'lodash.debounce';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button';

import useResponsiveDetect from '../hooks/useResponsiveDetect'

const Item = styled(Paper)(({ }) => ({
  textAlign: 'center',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));


const ItemMobile = styled(Paper)(({ }) => ({
    textAlign: 'center',
    color: 'black',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: '10px 20px'
}));

const Logo = styled(Paper)(({ }) => ({
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'var(--gradientBe)',
    boxShadow: 'none',
    fontWeight: 700,
    fontSize:'32px',
    textAlign: 'center'
}));

function setDeviceOnResize(props) {
    const debounceFn = debounce(() => {
      let devicesAvailable = useResponsiveDetect(); 
      props.setDevice(devicesAvailable.actualDeviceName);
    }, 100);
      
    window.addEventListener('resize', () => debounceFn() );
    window.removeEventListener('resize', () => debounceFn() );
}


function MobileMenu(){
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Grid2 container xl={1} md={1} xs={1} xlOffset={8} mdOffset={8} smOffset={6.5} xsOffset={5.5}>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            <MenuIcon />
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            >
            <Link style={{textDecoration: 'none'}} to="/library"  onClick={handleClose}><ItemMobile>Library</ItemMobile></Link>
            <Link style={{textDecoration: 'none'}} to="/halloffame" onClick={handleClose}><ItemMobile>Hall of Fame</ItemMobile></Link>
            <Link style={{textDecoration: 'none'}} to="/instructions"  onClick={handleClose}><ItemMobile>Instructions</ItemMobile></Link>
            <Link style={{textDecoration: 'none'}} to="/about" onClick={handleClose}><ItemMobile>About</ItemMobile></Link>
        </Menu>
    </Grid2>
    );
}

function DesktopMenu(){
    return (
        <>
            <Grid2 container md={6} xs={7} justifyContent="center" alignContent="center">
                        <Grid2 xs={3} md={3}>
                            <Link to="/library" style={{textDecoration: 'none'}}> 
                                <Item>Library</Item>
                            </Link>
                        </Grid2>

                        <Grid2 xs={3} md={3}>
                            <Link to="/halloffame" style={{textDecoration: 'none'}}> 
                                <Item>Hall of Fame</Item>
                            </Link>
                        </Grid2>

                        <Grid2 xs={3} md={3}>
                            <Link to="/instructions" style={{textDecoration: 'none'}}> 
                                <Item>Instructions</Item>
                            </Link>
                        </Grid2>

                        <Grid2 xs={3} md={3}>
                            <Link to="/about" style={{textDecoration: 'none'}}> 
                                <Item>About</Item>
                            </Link>
                        </Grid2>
                </Grid2> 

                <Grid2 container md={1} mdOffset={1} xsOffset={.5} justifyContent="center" alignContent="center">
                    <Grid2 md={4}>
                        <FacebookIcon fontSize="large" color="primary"/>
                    </Grid2>
                    <Grid2 md={4}>
                        <FacebookIcon fontSize="large" color="primary"/>
                    </Grid2>
                    <Grid2 md={4}>
                        <FacebookIcon fontSize="large" color="primary"/>
                    </Grid2>
            </Grid2>
        </>
    )
}


function NavBar(){
    let devicesAvailable = useResponsiveDetect();
    const [device, setDevice] = useState(devicesAvailable.actualDeviceName); // for DeviceSelectedButtons
    setDeviceOnResize({device, setDevice});


    return (
        <Grid2 container backgroundColor="var(--backgroundDarkerGrey)" minHeight={90} md={12} display="flex" alignContent="center">
            <Grid2 container md={2} mdOffset={1} xsOffset={.5} xs={3.5}>
                <Link to="/" style={{fontWeight: 700, textDecoration: 'none'}}> 
                    <Logo>Be</Logo>
                    <Item style={{marginTop: '-5px'}}>
                        Design Set
                    </Item>
                </Link>
            </Grid2>
            
            {device === 'desktop' ? <DesktopMenu/> : <MobileMenu/>}
        </Grid2>
    )
}

export default NavBar;