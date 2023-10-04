import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM, not ReactDOM from 'react-dom/client'
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {ChakraProvider}  from '@chakra-ui/react';
const root = document.getElementById('root'); // Get the root DOM element

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);