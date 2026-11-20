import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import { BlogIndex, BlogPost } from './blog/blog';

// /blog/ and /blog/<slug>/ are real folders in the build (see scripts/prerender-blog.js),
// so a pathname check is enough routing.
const [, section, slug] = window.location.pathname.split('/');
const page = section !== 'blog' ? <App /> : slug ? <BlogPost slug={slug} /> : <BlogIndex />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {page}
  </ThemeProvider>
);

reportWebVitals();
