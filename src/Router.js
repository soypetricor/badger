import React from 'react'
import {
	BrowserRouter,
	Routes,
	Route,
	Link
  } from "react-router-dom";
  import { Navbar } from './components'

  import Home from './pages/home'
  import CreateForm from './pages/CreateForm'

  export default function Router() {
	return (

		<BrowserRouter>
			<Navbar>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/create-badge' element={<CreateForm />} />
				</Routes>
			</Navbar>
		</BrowserRouter>
		
	)
}