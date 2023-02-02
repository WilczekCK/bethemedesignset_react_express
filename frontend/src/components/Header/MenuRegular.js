import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';

function Render(){
    return (
        <Grid2 container md={8} xs={8}>
            <Grid2 container md={9} justifyContent="center" alignContent="center">
                <Grid2 xs={3} md={3}>
                    <Link to="/library" style={{textDecoration: 'none'}}> 
                        Library
                    </Link>
                </Grid2>

                <Grid2 xs={3} md={3}>
                    <Link to="/halloffame" style={{textDecoration: 'none'}}> 
                        Hall of Fame
                    </Link>
                </Grid2>

                <Grid2 xs={3} md={3}>
                    <Link to="/instructions" style={{textDecoration: 'none'}}> 
                       Instructions
                    </Link>
                </Grid2>

                <Grid2 xs={3} md={3}>
                    <Link to="/about" style={{textDecoration: 'none'}}> 
                        About
                    </Link>
                </Grid2>
            </Grid2> 

            <Grid2 container md={2} mdOffset={1} xsOffset={.5} justifyContent="center" alignContent="center">
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

export default Render;