import React, { useState } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function Render(){
    const layoutCategories = ['About us', 'Blog', 'Portfolio', 'Contact', 'Others'];
    const [layoutCategory, setLayoutCategory] = useState('Others');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if(name === 'layoutCategory'){
            setLayoutCategory(value)
        } 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
    }

    return (
        <Grid2 container justifyContent={'center'}>
            <Grid2 md={4} xs={8} style={{'border': '2px solid black'}}>
                <h3> Paste the code you got from export tool </h3>
                <Box textAlign={'left'} component="form" noValidate autoComplete="off" m={3} onSubmit={handleSubmit}>
                    <FormControl fullWidth margin={'dense'}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Layout name"
                            defaultValue="Hello World"
                            fullWidth
                        />
                    </FormControl>

                    <FormControl fullWidth margin={'dense'}>
                        <InputLabel id="layout-select-label">Layout type</InputLabel>
                        <Select
                            labelId="layout-select-label"
                            id="layout-select"
                            onChange={handleChange}
                            value={layoutCategory}
                            label="Layout type"
                            name='layoutCategory'
                        >
                            { layoutCategories.map((item) => (
                                <MenuItem value={item}> {item} </MenuItem>
                            )) }
                        </Select>
                        </FormControl>

                    <FormControl fullWidth margin={'dense'}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Layout name"
                            defaultValue="Hello World"
                            fullWidth
                            multiline
                            rows={4}
                            maxRows={4}
                        />
                    </FormControl>

                    <FormControl fullWidth margin={'dense'}>
                        <TextField
                            id="outlined"
                            label="Author name"
                            defaultValue="Hello World"
                            fullWidth
                        />
                    </FormControl>
                    

                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </Grid2>
        </Grid2>
    );
}