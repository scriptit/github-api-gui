'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

var container = document.getElementById('container');

ReactDom.render(
  React.createElement(App),
  container
);
