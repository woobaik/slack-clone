import React, { useState } from "react"
import { useFirebase } from "react-redux-firebase"
import FormInput from "./FormInput"

import { ReactComponent as SampleAvatar } from "../../assets/imgs/svg/female_avatar.svg"

const Login = () => {
	const firebase = useFirebase()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)

	// handleChange for input
	const handleChange = (e) => {
		const targetName = e.target.type

		if (targetName === "email") {
			setEmail(e.target.value)
		} else if (targetName === "password") {
			setPassword(e.target.value)
		}
	}

	const formValidation = (email, password) => {
		// regex
		if (email.length === 0) {
			setError("Please enter your email address :)")
			return false
		} else if (password.length < 6) {
			setError("Please Enter your password :)")
			return false
		}
		// email regex
		return true
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (formValidation(email, password)) {
			firebase
				.login({
					email,
					password,
				})
				.then(() => {
					console.log("success")
				})
				.catch((err) => {
					console.log(err)
				})
		}
	}

	return (
		<div className="Login">
			<div className="login-left">
				<SampleAvatar />
			</div>

			<div className="login-right">
				<form action="" onSubmit={(e) => handleSubmit(e)}>
					{error ? <div>ERROR</div> : null}
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
