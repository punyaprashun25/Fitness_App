import React from 'react'
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import { Homepage } from './pages';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route
						exact
						path="/"
						element={<Homepage />}
					/>
					<Route
						path="*"
						element={<Navigate to="/" />}
					/>
				</Routes>
			</Router>
		</>

	)
}

export default App

