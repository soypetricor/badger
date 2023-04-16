import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'

import { Layout } from 'antd'
import Router from './Router.js'

const GlobalStyle = createGlobalStyle `

body {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	background-color: #2F2F30;
	color: #FFFFFF
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<StrictMode>
		<Layout>
			<GlobalStyle/>
			<Router />
		</Layout>
	</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
