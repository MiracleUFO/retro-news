import React from 'react';
import ReactDOM from 'react-dom';
//import firebase from 'firebase';
import { StoreProvider } from './context';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

/*const firebaseConfig = {
  apiKey: "AIzaSyCBwFamUB9H6vjgCh0bI7qT_xVmN3HhZTA",
  authDomain: "retro-news-7331e.firebaseapp.com",
  projectId: "retro-news-7331e",
  storageBucket: "retro-news-7331e.appspot.com",
  messagingSenderId: "787561753647",
  appId: "1:787561753647:web:db366faec01d56ebfe2ada",
  measurementId: "G-XY0RVR0WZK"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
*/

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
