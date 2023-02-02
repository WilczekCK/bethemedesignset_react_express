import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const ItemMobile = styled(Paper)(({ }) => ({
    color: 'black',
    padding: '10px 20px',
    boxShadow: 'unset',
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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Grid2 container md={8} sm={6} xs={6} xsOffset={1} direction="row-reverse">
            <Button
                id="hamburger-menu-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuIcon />
            </Button>

            <Menu
                id="hamburger-menu" anchorEl={anchorEl}
                open={open} onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'hamburger-menu-button',
                }}
            >
            
            <Link to="/library"  onClick={handleClose}>
                <ItemMobile>Library</ItemMobile>
            </Link>
            
            <Link to="/halloffame" onClick={handleClose}>
                <ItemMobile>Hall of Fame</ItemMobile>
            </Link>
            
            <Link to="/instructions"  onClick={handleClose}>
                <ItemMobile>Instructions</ItemMobile>
            </Link>

            <Link to="/about" onClick={handleClose}>
                <ItemMobile>About</ItemMobile>
            </Link>
        </Menu>
    </Grid2>
    );
}

export default Render;