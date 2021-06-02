import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const app = (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById('hook-work'));

reportWebVitals();
