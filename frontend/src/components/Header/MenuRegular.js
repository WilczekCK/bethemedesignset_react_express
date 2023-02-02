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
    '&:hover': {
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundImage: 'var(--gradientBe)',
      boxShadow: 'none',
      textAlign: 'center',
      transition: 'all .3s ease-in-out'
    }
  }));
  

function Render(){
    return (
        <Grid2 container md={8} xs={8}>
            <Grid2 container md={9} justifyContent="center" alignContent="center">
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