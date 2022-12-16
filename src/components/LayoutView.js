import React from 'react';
import IframeResizer from 'iframe-resizer-react';

function LayoutView() {
  return (
    <div className="LayoutView__container">
      <IframeResizer
            log
            src="https://themes.muffingroup.com/be/marketing2/"
            style={{ width: '1px', minWidth: '100%'}}
        />
    </div>
  );
}

export default LayoutView;
