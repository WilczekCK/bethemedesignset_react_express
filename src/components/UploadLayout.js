import React, { useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

export default function Render(){
    return (
        <Grid2 container justifyContent={'center'}>
            <Grid2 md={4} xs={8} style={{'border': '2px solid black'}}>
                <h3> Paste the code you got from export tool </h3>
                <form>
                    <input type="text"></input>
                </form>
            </Grid2>
        </Grid2>
    );
}