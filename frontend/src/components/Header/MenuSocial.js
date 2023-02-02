import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import FacebookIcon from '@mui/icons-material/Facebook';

function Render(){
    return (
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
    )
}

export default Render;