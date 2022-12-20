import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const LayoutView__container = styled(Paper)(({ }) => ({
  width: '1240px',
  margin: '0 auto',
}));

function BasicButtonGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button>Mobile</Button>
      <Button>Tablet</Button>
      <Button>Desktop</Button>
    </ButtonGroup>
  )
}

function LayoutView() {
  return (
    <LayoutView__container>
      <BasicButtonGroup />
      <IframeResizer
            log
            src="https://themes.muffingroup.com/be/marketing2/"
            style={{ width: '1240px' }}
            scrolling={true}
        />
    </LayoutView__container>
  );
}

export default LayoutView;
