import React, { useState } from "react"
import { useFirebase } from "react-redux-firebase"
import FormInput from "./FormInput"

const Registration = () => {
	const firebase = useFirebase()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [passwordConfirmation, setPasswordConfirmation] = useState("")
	const [error, setError] = useState(null)
	const [username, setUsername] = useState("")

	// handleChange for input
	const handleChange = (e) => {
		const targetName = e.target.type
		console.log(e.target.value)
		if (targetName === "email") {
			setEmail(e.target.value)
		} else if (targetName === "password") {
			setPassword(e.target.value)
		} else if (targetName === "password confirmation") {
			setPasswordConfirmation(e.target.value)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		firebase
			.createUser({ email, password }, { username, email })
			.then(() => {
				console.log("success")
			})
			.catch((err) => {
				console.log(err)
			})
	}

	return (
		<div className="Registration">
			<div className="registraion-left"></div>

			<div className="registraion-right">
				<form action="" onSubmit={(e) => handleSubmit(e)}>
					<FormInput
						label="email"
						type="email"
						onChange={handleChange}
						name="email"
					/>
					<FormInput label="password" type="password" onChange={handleChange} />
					<FormInput
						label="password confirmation"
						type="passwordConfirmation"
						onChange={handleChange}
					/>
					<input type="submit" value="submit" />
				</form>
			</div>
		</div>
	)
}

export default Registration
