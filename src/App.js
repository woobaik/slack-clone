import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Login from "./components/Auth/Login"
import Registration from "./components/Auth/Registration"

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route exact path="/"></Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
