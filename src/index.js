import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// STEP 3: Import the Site context provider into the index.js
import SiteContextProvider from '../src/contexts/SiteData'

ReactDOM.render(
  <React.StrictMode>
    {/* STEP 4: Wrap all children componenets in the ContextProvider Tag we just created */}
    <SiteContextProvider> {/* CONTEXT PROVIDER */}
       <App />  {/* CHILD COMPONENT */}
    </SiteContextProvider>


  </React.StrictMode>,
  document.getElementById('root')
);
