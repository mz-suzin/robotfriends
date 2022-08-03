import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App'; //When theres no file type after the name, React assumes it is .js
// import Hello from './Hello';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>







    {/* <Hello greeting={'hello again my friend'}/> greeting is a property and can be accessed through this.props or stuff like this */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
