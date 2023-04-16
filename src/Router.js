import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Link
  } from "react-router-dom";
  import { Title, Navbar } from './components'

  import Home from './pages/home'

  export default function Router() {
	return (

		<BrowserRouter>
			<Navbar>
				<Routes>
					<Route path='/home' element={<Home />} />
				</Routes>
			</Navbar>
		</BrowserRouter>
		
	)
}