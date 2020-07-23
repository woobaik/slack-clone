import React, { useState } from "react"

import FormInput from "./FormInput"

const Login = () => {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	// handleChange for input
	const handleChange = (e) => {
		const targetName = e.target.type

		console.log(e.target.value)

		if (targetName === "email") {
			setEmail(e.target.value)
		} else if (targetName === "password") {
			setPassword(e.target.value)
		}
	}

	const handleSubmit = (e) => {
		console.log(e)
		e.preventDefault()
		// check form is valid
		//check if login success
	}

	return (
		<div className="Login">
			<div className="login-left"></div>

			<div className="login-right">
				<form action="" onSubmit={(e) => handleSubmit(e)}>
					<FormInput
						label="email"
						type="email"
						onChange={handleChange}
						name="email"
					/>
					<FormInput label="password" type="password" onChange={handleChange} />
					<input type="submit" value="submit" />
				</form>
			</div>
		</div>
	)
}

export default Login
