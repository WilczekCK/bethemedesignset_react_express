import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ }) => ({
  backgroundColor: 'grey',
  textAlign: 'center',
  color: 'white',
  textDecoration: 'none'
}));

function NavBar(){
  return (
        <Grid2 container spacing={3}>
            <Grid2 md={4}>
                <Item>
                    <Link to="/"> Home </Link>
                </Item>
            </Grid2>
            <Grid2 md={4}>
                <Item>
                    <Link to="/library"> Library </Link>
                </Item>
            </Grid2>
            <Grid2 md={4}>
                <Item>
                    <Link to="/about"> About </Link>
                </Item>
            </Grid2>
        </Grid2>
  )
}

export default NavBar;