import React from 'react';
import ReactDOM from 'react-dom';
// https://github.com/conorhastings/react-syntax-highlighter
import SyntaxHighlighter from 'react-syntax-highlighter/dist/prism';

import { tomorrow } from 'react-syntax-highlighter/dist/styles/prism';

const mountCodeExample = (containerId, code) => {
  const container = document.getElementById(containerId);

  ReactDOM.render(
    <SyntaxHighlighter language="jsx" style={tomorrow} showLineNumbers>
      {code}
    </SyntaxHighlighter>,
    container
  );
};

export default mountCodeExample;
