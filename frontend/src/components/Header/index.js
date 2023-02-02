import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';

import rwd from '../../data/responsiveBreakpoints.json';
import MenuRegular from './MenuRegular'
import MenuHamburger from './MenuHamburger'

const Logo = styled(Paper)(({ }) => ({
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundImage: 'var(--gradientBe)',
    boxShadow: 'none',
    fontWeight: 700,
    fontSize:'32px',
    textAlign: 'center',
    marginBottom:'-5px'
}));

function NavBar(){
    const isDesktopResolution = useMediaQuery(`(min-width:${rwd['desktop']})`);

    return (
        <Grid2 container backgroundColor="var(--backgroundDarkerGrey)" minHeight={90} md={12} display="flex" alignContent="center">
            <Grid2 container md={2} lg={2} xs={4} mdOffset={1} xsOffset={1} >
                <Link to="/" style={{fontWeight: 700, marginTop:'-5px'}}> 
                    <Logo>Be</Logo>
                    Design Set
                </Link>
            </Grid2>
            
            {isDesktopResolution ? <MenuRegular/> : <MenuHamburger/>}
        </Grid2>
    )
}

export default NavBar;