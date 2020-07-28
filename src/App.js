import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

import Header from "./components/layouts/Header"
import MainPage from "./components/MainPage/MainPage"
import Login from "./components/Auth/Login"
import Registration from "./components/Auth/Registration"

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/registration">
						<Registration />
					</Route>
					<Route exact path="/">
						<MainPage />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
