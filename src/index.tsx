import React from 'react';
import ReactDOM from 'react-dom/client';

import './Styles/fonts.css';
import './index.css';
import Router from './router';
import { ThemeProvider } from 'styled-components';
import {theme} from './Styles/Themes'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
		<ThemeProvider theme={theme}>
    	<Router />
		</ThemeProvider>
  </React.StrictMode>
);