import React from 'react';
import IframeResizer from 'iframe-resizer-react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const LayoutView__container = styled(Paper)(({ }) => ({
  width: '1240px',
  margin: '0 auto',
}));

function LayoutView() {
  return (
    <LayoutView__container>
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
