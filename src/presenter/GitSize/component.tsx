import * as React from 'react';
import * as CSSModules from 'react-css-modules';
const style = require('./style.less');

const GitSizeRSC = ({ size, refreshCount, onClick }) => (
  <div>
    <p styleName='size-bg'>Size: { size }</p>
    <p>Refresh Count: { refreshCount.count }</p>
    <button onClick={ onClick }> Refresh </button>
  </div>
);

export const GitSize = CSSModules(GitSizeRSC, style); // modulise style with component