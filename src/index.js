import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'

const injectGA = () => {
    if (typeof window == 'undefined') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
  
    gtag('config', 'G-6H1G1NCXX8');
  };

ReactDOM.render(
    
    <BrowserRouter>
        <App />
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-6H1G1NCXX8"
        />
    <script>{injectGA()}</script>
    </BrowserRouter>,
    document.getElementById('root')
)

