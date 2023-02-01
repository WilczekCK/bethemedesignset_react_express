import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";

import FacebookIcon from '@mui/icons-material/Facebook';


const Item = styled(Paper)(({ }) => ({
  textAlign: 'center',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'none',
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

function NavBar(){
  return (
        <Grid2 container backgroundColor="var(--backgroundDarkerGrey)" minHeight={90} md={12} display="flex" alignContent="center">
            <Grid2 container md={1} mdOffset={1} xsOffset={.5}>
                <Link to="/" style={{fontWeight: 700, textDecoration: 'none'}}> 
                    <Logo>Be</Logo>
                    <Item style={{marginTop: '-5px'}}>
                        Design Set
                    </Item>
                </Link>
            </Grid2>
            
            <Grid2 container md={8} xs={7} display="flex" justifyContent="center" alignContent="center">
                    <Grid2 xs={3} md={2}>
                        <Link to="/library" style={{textDecoration: 'none'}}> 
                            <Item>Library</Item>
                        </Link>
                    </Grid2>

                    <Grid2 xs={3} md={2}>
                        <Link to="/halloffame" style={{textDecoration: 'none'}}> 
                            <Item>Hall of Fame</Item>
                        </Link>
                    </Grid2>

                    <Grid2 xs={3} md={2}>
                        <Link to="/instructions" style={{textDecoration: 'none'}}> 
                            <Item>Instructions</Item>
                        </Link>
                    </Grid2>

                    <Grid2 xs={3} md={2}>
                        <Link to="/about" style={{textDecoration: 'none'}}> 
                            <Item>About</Item>
                        </Link>
                    </Grid2>
            </Grid2> 

            <Grid2 container md={1} mdOffset={0} xsOffset={.5} display="flex" justifyContent="center" alignContent="center">
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
        </Grid2>
  )
}

export default NavBar;