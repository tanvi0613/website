import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import SignupLogin from './Components/SignupLogin';
import App from './App';
//import LandingPage from './Components/LandingPage'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
reportWebVitals();
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <SignupLogin />
//   </React.StrictMode>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <LandingPage />
//   </React.StrictMode>
// );