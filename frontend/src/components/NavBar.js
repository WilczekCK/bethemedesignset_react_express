import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ }) => ({
  textAlign: 'center',
  color: 'white',
  textDecoration: 'none',
  backgroundColor: 'transparent'
}));

function NavBar(){
  return (
        <Grid2 container backgroundColor="var(--backgroundDarkerGrey)" minHeight={100} md={12} display="flex" alignContent="center">
            <Grid2 container md={1} mdOffset={1} xsOffset={.5}>
                <Link to="/"> LOGO </Link>
            </Grid2>
            
            <Grid2 container md={8} xs={8} padding="0px 50px">
                    <Grid2 xs={3} md={3}>
                        <Link to="/library"> Library </Link>
                    </Grid2>
                
                    <Grid2 xs={3} md={3}>
                        <Link to="/about"> About </Link>
                    </Grid2>

                    <Grid2 xs={3} md={3}>
                        <Link to="/halloffame"> Hall of Fame </Link>
                    </Grid2>

                    <Grid2 xs={3} md={3}>
                        <Link to="/instructions"> Instructions </Link>
                    </Grid2>
            </Grid2> 

            <Grid2 container md={1} mdOffset={0} xsOffset={.5}>
                <Grid2 md={4}>
                        <Link to="#"> S1 </Link>
                </Grid2>
                <Grid2 md={4}>
                        <Link to="#"> S2 </Link>
                    </Grid2>
                <Grid2 md={4}>
                        <Link to="#"> S3 </Link>
                </Grid2>
            </Grid2>
        </Grid2>
  )
}

export default NavBar;